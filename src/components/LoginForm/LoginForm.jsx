import './styles.css';

// LoginForm.jsx
import React from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { login, email, password } from './data';

function LoginForm() {
    console.log({login})
    console.log({email})
    console.log({password})
  return (
    <div className="login-panel">
      <form action="" className='login-Form'>
        <h2>Login form</h2>
        <Input {...email} />
        <Input {...password} />
        <Button {...login} />
      </form>
    </div>
  );
}

export default LoginForm;