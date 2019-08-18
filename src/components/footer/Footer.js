import React from 'react';
import tico from './tico.jpg';

export default function Footer() {
  return (
    <div>
      <div className='footer-container'>
        <div className='author-container'>
          <a
            href='https://www.linkedin.com/in/ticotheps/'
            target='_blank'
            className='author-pic-link wobble-hor-bottom'
            rel='noopener noreferrer'
          >
            <img className='author-pic' src={tico} alt='author headshot' />
          </a>
        </div>
        <div>
          <p className='footer'>© Tico S. Thepsourinthone 2019</p>
          <p className='footer'>
            See more of Tico's Work at{' '}
            <a
              href='http://heytico.com'
              target='_blank'
              className='footer-plug'
              rel='noopener noreferrer'
            >
              heytico.com
            </a>
          </p>
          Glider GIF By{' '}
          <a
            href='https://en.wikipedia.org/wiki/User:Kieff'
            target='_blank'
            rel='noopener noreferrer'
            class='extiw'
            title='en:User:Kieff'
          >
            Kieff
          </a>{' '}
          -{' '}
          <span class='int-own-work' lang='en'>
            Own work
          </span>
          ,{' '}
          <a
            href='http://creativecommons.org/licenses/by-sa/3.0/'
            target='_blank'
            rel='noopener noreferrer'
            title='Creative Commons Attribution-Share Alike 3.0'
          >
            CC BY-SA 3.0
          </a>
          ,{' '}
          <a
            href='https://commons.wikimedia.org/w/index.php?curid=101736'
            target='_blank'
            rel='noopener noreferrer'
          >
            Link
          </a>
        </div>
      </div>
    </div>
  );
}
