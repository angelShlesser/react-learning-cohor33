// components/Input/Input.jsx
import './Input.css'

import React, { useState } from 'react';

function Input({ name, type, placeholder, label }) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={showPassword ? 'text' : type}
        name={name}
        placeholder={placeholder}
        required
      />
      {type === 'password' && (
        <span className="eye-icon" onClick={toggleShowPassword}>
          {showPassword ? '👁️' : '👁️‍🗨️'}
        </span>
      )}
    </div>
  );
}

export default Input;
