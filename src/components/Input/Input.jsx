// Input.jsx
import React from 'react';

function Input({ nameType, type, placeholder, label }) {
  return (
    <div className="input-group">
      <p>{nameType}</p>
      <input type={type} placeholder={placeholder} required />
    </div>
  );
}

export default Input;
