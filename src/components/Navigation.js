import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  const marginStyling = {
    padding: '0px',
    margin: '0px',
  }
  const liStyle = { 
    display: 'flex', 
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', 
    fontStyle: 'oblique',
    padding: '20px',
    justify: 'space-between',
    flexWrap: 'wrap',
    display: 'block',
    color: 'black',
  };

  const liAStyle = {
    margin: '30px',
  };

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#aboutme"
          onClick={() => handlePageChange('AboutMe')}
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navigation;