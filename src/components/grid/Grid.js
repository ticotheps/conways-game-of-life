import React, { Component } from 'react';
import Cell from './Cell';
import { smile, frown, wink } from '../preset/Preset';

class Grid extends Component {
  state = {
    cells: [],
    interval: 100,
    isRunning: false,
    CELL_SIZE: 10,
    WIDTH: 500,
    HEIGHT: 500,
    counter: 0,
  };

  rows = this.state.HEIGHT / this.state.CELL_SIZE;
  cols = this.state.WIDTH / this.state.CELL_SIZE;
  board = this.makeEmptyBoard();

  // Creates an empty board
  makeEmptyBoard() {
    let board = [];

    for (let y = 0; y < this.rows; y++) {
      board[y] = [];
      for (let x = 0; x < this.cols; x++) {
        board[y][x] = false;
      }
    }
    // console.log(board);
    return board;
  }

  // Create cells from this.board
  makeCells() {
    let cells_copy = [];

    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.board[y][x]) {
          cells_copy.push({ x, y });
        }
      }
    }
    return cells_copy;
  }

  getElementOffset() {
    const rect = this.boardRef.getBoundingClientRect();
    // Document.documentElement returns the Element that
    // is the root element of the document
    const doc = document.documentElement;
    return {
      x: rect.left + window.pageXOffset - doc.clientLeft,
      y: rect.top + window.pageYOffset - doc.clientTop,
    };
  }

  handleClick = event => {
    const elemOffset = this.getElementOffset();
    const offsetX = event.clientX - elemOffset.x;
    const offsetY = event.clientY - elemOffset.y;
    const x = Math.floor(offsetX / this.state.CELL_SIZE);
    const y = Math.floor(offsetY / this.state.CELL_SIZE);
    console.log(`{ x: ${x}, y: ${y} }`);
    if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
      this.board[y][x] = !this.board[y][x];
    }

    this.setState({
      cells: this.makeCells(),
    });
  };

  runGame = () => {
    this.setState({ isRunning: true });
    this.runIteration();
  };

  stopGame = () => {
    this.setState({ isRunning: false });
    if (this.timeoutHandler) {
      window.clearTimeout(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  };

  handleIntervalChange = event => {
    this.setState({ interval: event.target.value });
  };

  handleClear = () => {
    this.board = this.makeEmptyBoard();
    this.setState({
      cells: this.makeCells(),
      counter: 0,
    });
  };

  handleRandom = () => {
    this.stopGame();
    this.handleClear();
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        this.board[y][x] = Math.random() >= 0.5;
      }
    }
    this.setState({
      counter: 0,
      cells: this.makeCells(),
    });
  };

  handlePreset = e => {
    this.stopGame();
    this.handleClear();
    if (e.target.value === 'frown') {
      frown.forEach(item => {
        this.board[item.y][item.x] = true;
      });
    } else if (e.target.value === 'smile') {
      smile.forEach(item => {
        this.board[item.y][item.x] = true;
      });
    } else if (e.target.value === 'wink') {
      wink.forEach(item => {
        this.board[item.y][item.x] = true;
      });
    }
    this.setState({
      counter: 0,
      cells: this.makeCells(),
    });
  };

  runIteration() {
    console.log('running iteration');
    let newBoard = this.makeEmptyBoard();
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        let neighbors = this.calculateNeighbors(this.board, x, y);
        /* Checks to see if cell exists */
        if (this.board[y][x]) {
          /* Satisfies 2nd rule of Conway's Game of Life */
          if (neighbors === 2 || neighbors === 3) {
            /* This cell lives to the next generation */
            newBoard[y][x] = true;
          } else {
            newBoard[y][x] = false;
          }
        } else {
          if (!this.board[y][x] && neighbors === 3) {
            newBoard[y][x] = true;
          }
        }
      }
    }
    this.board = newBoard;
    console.log('Generation: ', this.state.counter);
    this.setState((prevState, { counter }) => ({
      cells: this.makeCells(),
      counter: prevState.counter + 1,
    }));
    this.timeoutHandler = window.setTimeout(() => {
      this.runIteration();
    }, this.state.interval);
  }

  calculateNeighbors(board, x, y) {
    let neighbors = 0;
    const dirs = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1],
    ];
    for (let i = 0; i < dirs.length; i++) {
      const dir = dirs[i];
      let y1 = y + dir[0];
      let x1 = x + dir[1];

      if (
        x1 >= 0 &&
        x1 < this.cols &&
        y1 >= 0 &&
        y1 < this.rows &&
        board[y1][x1]
      ) {
        neighbors++;
      }
    }

    return neighbors;
  }

  render() {
    const {
      cells,
      interval,
      isRunning,
      CELL_SIZE,
      WIDTH,
      HEIGHT,
      counter,
    } = this.state;

    return (
      <div className='outer-grid-container'>
        <div className='grid-container'>
          <h4 className='user-instructions'>
            Create your OWN design or choose a preset below & click "Run"!
          </h4>
          <div
            className='Board'
            style={{
              width: WIDTH,
              height: HEIGHT,
              backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
            }}
            onClick={this.handleClick}
            ref={n => {
              this.boardRef = n;
            }}
          >
            {cells.map(cell => (
              <Cell
                CELL_SIZE={CELL_SIZE}
                x={cell.x}
                y={cell.y}
                key={`${cell.x}, ${cell.y}`}
              />
            ))}
          </div>
          <div className='preset-container'>
            <div className='generation-container'>
              <h2>
                Generation: <span className='counter'>{counter}</span>
              </h2>
            </div>
            <div className='preset-btns-container'>
              <div className='inner-preset-top-container'>
                <button className='presetButton' onClick={this.handleRandom}>
                  Random
                </button>
                <button
                  className='presetButton'
                  onClick={e => this.handlePreset(e)}
                  value='smile'
                >
                  Smile
                </button>
              </div>
              <div className='inner-preset-bottom-container'>
                <button
                  className='presetButton'
                  onClick={e => this.handlePreset(e)}
                  value='frown'
                >
                  Frown
                </button>
                <button
                  className='presetButton'
                  onClick={e => this.handlePreset(e)}
                  value='wink'
                >
                  Wink
                </button>
              </div>
            </div>
          </div>
          <div className='controls-container'>
            <p className='controls-text'>Update Every: </p>
            <input value={interval} onChange={this.handleIntervalChange} />
            <p className='controls-text'>msec</p>
            {isRunning ? (
              <button className='controls-btn' onClick={this.stopGame}>
                Stop
              </button>
            ) : (
              <button className='controls-btn' onClick={this.runGame}>
                Run
              </button>
            )}
            <button className='controls-btn' onClick={this.handleClear}>
              Clear
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;
