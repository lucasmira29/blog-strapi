import './Button.css';

function Button({ type, children }) {
  return type === "primary" ? (
    <button className={`button ${type === 'primary' ? 'primary' : 'secondary'}`}>{children}</button>
  ) : (
    <button>{children}</button>
  );
}

export default Button;
