// Button.jsx

function Button({ loginButtonType, loginButtonName }) {
  return (
    <button type={loginButtonType} className="button_Login">
      {loginButtonName}
    </button>
  );
}

export default Button;
