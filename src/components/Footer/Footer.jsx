import React from 'react';
import './Footer.scss';
import { fb, ins, ln, tw } from '../../assets';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer-content'>
          <div className='left'>
            <p>Finstreet 118 2561 Fintown</p>
            <p>Hello@finsweet.com 020 7993 2905</p>
          </div>
          <div className='right'>
            <a href='https://facebook.com'>
              <img src={fb} alt='Social media' />
            </a>
            <a href='https://twitter.com'>
              <img src={tw} alt='Social media' />
            </a>
            <a href='https://instagram.com'>
              <img src={ins} alt='Social media' />
            </a>
            <a href='https://linkedin.com'>
              <img src={ln} alt='Social media' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
