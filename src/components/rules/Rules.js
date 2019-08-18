import React from 'react';

const Rules = () => {
  return (
    <div className='rules-container'>
      <ol className='rules-list-container'>
        <div className='rules-title-container'>
          <h2>
            <a
              className='rules-link'
              href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules'
              target='_blank'
              rel='noopener noreferrer'
            >
              Rules of The Game:
            </a>
          </h2>
        </div>
        <li className='rules-content'>
          (1) Any "live" cell (a white square) with fewer than TWO live
          neighbors "dies" (becomes a black square), as if caused by
          under-population.
        </li>
        <br />
        <li className='rules-content'>
          (2) Any "live" cell (a white square) with TWO or THREE "live"
          neighbors "lives" (remains a white square) on to the next generation.
        </li>
        <br />
        <li className='rules-content'>
          (3) Any "live" cell (a white square) with more than THREE "live"
          neighbors "dies" (becomes a black square), as if by over-population.
        </li>
        <br />
        <li className='rules-content'>
          (4) Any "dead" cell (a black square) with exactly THREE "live"
          neighbors becomes a "live" cell, as if by reproduction.
        </li>
      </ol>
    </div>
  );
};

export default Rules;
