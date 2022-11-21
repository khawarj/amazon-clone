import React from 'react'

import "./custombutton.css"

const CustomButton = ({ className = '', children, ...restProps }) => {
  return (
    <button className={`custom__btn ${className}`} {...restProps}>
      {children}
    </button>
  );
};

export default CustomButton
