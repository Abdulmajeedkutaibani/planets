import React from 'react';

const Button = ({ btnNumber, btnText, onClick }) => {
  return (
    <button onClick={onClick}>
      <h3 className='btn__number'>{btnNumber}</h3>
      <h3>{btnText}</h3>
    </button>
  );
};

export default Button;
