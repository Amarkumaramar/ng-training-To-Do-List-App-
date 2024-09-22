// src/components/Footer.js
import React from 'react';
import './Footer.js';

const Footer = ({ page, totalPages, handleFirst, handlePrev, handleNext, handleLast }) => {
  return (
    <div className="footer">
      <span className="page-count">Page {page} of {totalPages}</span>
      <div className="pagination">
        <button onClick={handleFirst}>First</button>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
        <button onClick={handleLast}>Last</button>
      </div>
    </div>
  );
};

export default Footer;
