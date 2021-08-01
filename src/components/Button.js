import React from 'react';

const Button = ({ btnNumber, btnText }) => {
  return (
    <button>
      <h3 className='btn__number'>{btnNumber}</h3>
      <h3>{btnText}</h3>
    </button>
  );
};

export default Button;
