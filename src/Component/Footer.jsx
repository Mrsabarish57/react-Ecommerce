import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    textAlign: 'center',
    padding: '15px 0',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  };

  return (
    <div style={footerStyle}>
      © 2025 Kevin Ecommerce. All rights reserved.
    </div>
  );
};

export default Footer;
