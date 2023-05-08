import React from 'react';

function Navigation() {
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
    <div style={marginStyling}>
    <nav style= {{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}>
            <ul className="flex-list" style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
                <li className="flex-list-item" style={liStyle}>
                    <a style={liAStyle} href="#about-christopher">About Me</a>
                </li>

                <li className="flex-list-item" style={liStyle}>
                    <a style={liAStyle} href="#deployed-work">Portfolio</a>
                </li>

                <li className="flex-list-item" style={liStyle}>
                    <a style={liAStyle} href="#contact-information">Contact Information</a>
                </li>

                <li className="flex-list-item" style={liStyle}>
                    <a style={liAStyle} href="#resume">Resume</a>
                </li>
            </ul>
        </nav>
      </div>
  );
}

export default Navigation;