// Input.jsx
import React from 'react';

function Input({ nameType, type, placeholder, label }) {
  return (
    <div className="input-group">
      {label && <label htmlFor={nameType}>{label}</label>}
      <input type={type} placeholder={placeholder} required />
    </div>
  );
}

export default Input;
