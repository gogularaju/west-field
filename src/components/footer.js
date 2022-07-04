import React from 'react';

import Contact from './Contact';

const Footer = () => {
  return (
      <div className="footer" id="footer">
        
            {/* <p>&copy; 2021</p> */}
            <div className="footer-title">Keep in Touch</div>
            <div>
                <Contact />
            </div>
           
    </div>
  );
}

export default Footer; 
