import React from 'react';

const About = () => {
  return (
    <div className='about-container'>
      <h2 className='polyas-title'>
        Using{' '}
        <a
          className='polyas-link'
          href='https://en.wikipedia.org/wiki/How_to_Solve_It'
          target='_blank'
          rel='noopener noreferrer'
        >
          Polya's 4 Principles
        </a>{' '}
        to Build This Game
      </h2>
      <h2 className='polyas-heading'>Understanding the Problem</h2>
      <h3>Why Did Conway Create This Model?</h3>
      <p className='polyas-content'>
        A mathematician named John Conway created this two-dimesional,
        zero-player game in 1970 to provide a visual model that would enable him
        to study "cellular automata" more closely. "Cellular automata" had
        already been studied previously by many scientists, two decades prior,
        as a possible model for biological systems. This visually-alluring 2D
        game continues to model concepts in: computer science, cryptography,
        mathematics, physics, complexity science, theoretical biology, etc.
      </p>
      <h3>What Should MY Re-Created Model Look Like?</h3>
      <p className='polyas-content'>
        Within the context of my re-created model, a "cellular automaton" would
        be considered a collection of black & white cells on this grid that can
        evolve over "generations" (iterative unit of time) according to the
        rules defined at the bottom of this page. Those rules are applied to
        each cell, during each generation, and are based on 1 of 2 states
        ("alive" or "dead") of each neighboring cell.
      </p>
      <h3>How Does It Work?</h3>
      <p className='polyas-content'>
        Before the game can start, an initial input (any collection of white
        squares) must be provided by the user, either manually on the grid or by
        choosing one of the provided preset options under the grid. After
        providing an input, the "Run" button must be clicked, which will cause
        the cells to "evolve" according to Conway's defined rules (as stated at
        the bottom of this page). With each passing "generation," those SAME
        rules are applied EVERY generation and SIMULTANEOUSLY across all cells.
      </p>
      <h2 className='polyas-heading'>Devising a Plan</h2>
      <p className='polyas-content'>
        (1) First, we need to create a board with a grid that can render black &
        white cells, which will revert between the colors when clicked on.
      </p>
      <p className='polyas-content'>
        (2) Then, we need to implement functionality to give the user the
        ability to control aspects of the game: a "Run"/"Stop" button to proceed
        or pause the cells' evolution, a "Clear" button to return to a board of
        all black cells, and a user input area that allows the user to specify
        the time between each iterated "generation".
      </p>
      <p className='polyas-content'>
        (3) Lastly, we need to give the user the option to select preset inputs.
      </p>
      <h2 className='polyas-heading'>Implementing the Plan</h2>
      <h3>Creating the Board</h3>
      <p className='polyas-content'>
        (1a) Within our React app, we'll need to define 3 things: the desired
        width of the board, the desired height of the board, and the length of
        individual cell's side (in pixels).
      </p>
      <h3>Making the Grid</h3>
      <p className='polyas-content'>
        (1b) Using CSS and linear gradients, we're able to color the board black
        and create the necessary vertical & horizontal lines to make a grid.
      </p>
      <h3>Storing Cells' "Dead" or "Alive" State</h3>
      <p className='polyas-content'>
        (1c) First, we'll create a "state" object in our main "Grid" component,
        that will keep track of each cell's "dead" or "alive" state as an array
        of arrays.
      </p>
      <h3>Retrieving Coordinates of User-Targeted Cells</h3>
      <p className='polyas-content'>
        (1d) Then, we'll create "onClick" event handlers and a "handleClick()"
        function that will provide the coordinates of the targeted cell, which
        then need to be converted to coordinates that are relative to our board.
      </p>
      <h3>Rendering Cells to the Board</h3>
      <p className='polyas-content'>
        (1e) Using a "makeCells()" function, we're able to access the individual
        values of EACH cell in our board and can set those values to "true" or
        "false", based on our recently-converted coordinates from step (1d).{' '}
      </p>
      <h3>Running/Stopping the Game</h3>
      <p className='polyas-content'>
        (2a) First, we need to create a "Run"/"Stop" button that progresses or
        pauses the evolution process for the cells. These two buttons will be
        displayed as a single button, which conditionally renders based on
        whether "isRunning" in our state object is "true" or "false".
      </p>
      <h3>Changing the Speed of Evolution</h3>
      <p className='polyas-content'>
        (2b) Next, using an "input" element, the "setState()" function, and a
        new "handleInterval()" function, we will give the user the ability to
        increase or decrease the speed between each "generation" (in units of
        milliseconds) while the "runIteration()" and the calculateNeighbors()
        functions are being executed.
      </p>
      <h3>Creating Preset Options for the User</h3>
      <p className='polyas-content'>
        (3) Lastly, we'll create 4 new buttons ("Random", "Smile", "Frown", &
        "Wink") that will provide pre-rendered boards with unique designs for
        the user to experience. All pre-rendered boards are arrays of objects
        containing, an "x" and "y" coordinate that are to be rendered via the
        "setState()" function.
      </p>
      <h2 className='polyas-heading'>Reflecting/Iterating</h2>
      <p className='polyas-content'>
        Upon reflecting on the project, the following are a few areas that could
        be improved: (a) refactoring "Grid.js" and creating new sub-components
        to improve readability, (b) using 'switch' statements in the
        "handlePreset()" function for improved readability & increased
        modularity, in case more presets were to be added, and (c) rendering all
        of "App.js" in the web browser's content window (without the possibility
        of a user having a vertical/horizontal scroll bar) so that the (x, y)
        coordinates returned from the "getElementOffset()" function could never
        be affected by varying values for "window.pageXOffset" &
        "window.pageYOffset".
      </p>
    </div>
  );
};

export default About;
