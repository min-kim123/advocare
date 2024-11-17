import React from 'react';
import './footer.css'

function Footer() {
  return (
    <footer className="w-[100vw] p-[30px] pb-16">
      <h1 className="logo mt-5 text-left text-2xl white-text">Advocare</h1>
      <div id='footer-flex-block' className="flex justify-evenly mt-6 flex-wrap">
        <div className='footer-block'>
          <div className='footer-label'>Customer</div>
          <div className='footer-links'>
            <a href='#'>Dashboard</a>
            <a href='#'>Upload Bill</a>
          </div>
        </div>
        <div className='footer-block'>
          <div className='footer-label'>Company</div>
          <div className='footer-links'>
            <a href='#'>About Us</a>
            <a href='#'>FAQ</a>
            <a href='#'>Resources</a>
            <a href='#'>Contact Us</a>
          </div>
        </div>
        <div className='footer-block'>
          <div className='footer-label'>Legal</div>
          <div className='footer-links'>
            <a href='#'>Terms of Service</a>
            <a href='#'>Privacy Policy</a>
          </div>
        </div>
        <div className='footer-block'>
          <div className='footer-label'>Contact Us</div>
          <div className='footer-links'>
            <a href='#'>Placeholder Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;