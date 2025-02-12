/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types'; 

const InputWithLabel = ({ id, value, type = 'text', onInputChange, children }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
        ref={inputRef}
      />
    </>
  );
};

InputWithLabel.PropTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired, 
  onInputChange: PropTypes.func.isRequired, 
  children: PropTypes.node.isRequired,
}
export default InputWithLabel;
