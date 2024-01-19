import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ title, description, icon, href }) => {
  return (
    <a href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        width: '100%', // This now refers to 100% of the container's width
        boxSizing: 'border-box',
        margin: '10px',
        cursor: 'pointer', // Change the mouse cursor on hover
        transition: 'transform 0.2s', // Smooth transition for hover effect
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px',
        }}>
          <FontAwesomeIcon 
            icon={icon} 
            style={{
              height: '25px', 
              width: '25px',
            //   border: '.5px solid #ccc', 
              padding: '3px',
              marginRight: '13px', 
              borderRadius: '5px',
            }} 
          />
          <h3 style={{ margin: 0, fontWeight: 'bold' }}>{title}</h3>
        </div>
        <p style={{ margin: 0, fontSize: 14 }}>
          {description}
        </p>
      </div>
    </a>
  );
};

export default Card;
