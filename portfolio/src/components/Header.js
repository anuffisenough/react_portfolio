import React from 'react';
import Navigation from './Navigation';

function Header({ currentPage, handlePageChange }) {
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'gray',
      flexWrap: 'wrap',
      height: '50px',
      width: '100%',
      position: 'fixed',
    }}
    >
      <h1 style={{
      flexDirection: 'row',
      width: '50%',
      fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
      fontStyle: 'oblique',
      alignSelf: 'center',
      justifySelf: 'center',
      }}>Christopher Uffman</h1>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

export default Header;
