import React from 'react';

const Button = ({ btnNumber, btnText, onClick }) => {
  return (
    <section>
      <button onClick={onClick} className='btn'>
        <h3 className='btn__number'>{btnNumber}</h3>
        <h3>{btnText}</h3>
      </button>
    </section>
  );
};

export default Button;
