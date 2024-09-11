// import React from 'react';
import './Button.css';

// eslint-disable-next-line react/prop-types
const Button = ({ caption = 'Shared Button' }) => (
  <button className="shared-button">{caption}</button>
);

export default Button;
