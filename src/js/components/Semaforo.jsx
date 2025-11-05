import React, { useState, useEffect } from 'react';

export const Semaforo = () => {
  const [Color, setColor] = useState();

  useEffect(() => {
  }, [Color]);

  const handleClick = (color) => {
    setColor(color);
  };

  const estiloBsase = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    margin: '10px',
    cursor: 'pointer',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    transition: 'box-shadow 0.3s, transform 0.2s'
  };

  const estiloColor = (color) => ({
    ...estiloBsase,
    backgroundColor: color,
    boxShadow: Color === color ? `0 0 30px ${color}` : estiloBsase.boxShadow,
    transform: Color === color ? 'scale(1.1)' : 'scale(1)'
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <div onClick={() => handleClick('red')} style={estiloColor('red')} />
      <div onClick={() => handleClick('yellow')} style={estiloColor('yellow')} />
      <div onClick={() => handleClick('green')} style={estiloColor('green')} />
    </div>
  );
};