import { Link } from "react-router";
import Button from "../Button";
import "./Header.css";

function Header({ data }) {
  const links = data.Link;
  const buttons = data.Button;
  
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header-title">{data.headerTitle}</h1>
      </Link>

      <ul>
        {Array.isArray(links) && links.length > 0 ? (
          links.map((link) => (
            <li key={link.id}>
              <Link to={link.url}>{link.label}</Link>
            </li>
          ))
        ) : (
          <li>Nenhum link disponível</li>
        )}
      </ul>
      {Array.isArray(buttons) && buttons.length > 0
        ? buttons.map((button) => (
            <Button key={button.id} type={button.type}>
              {button.buttonText}
            </Button>
          ))
        : null}
    </header>
  );
}

export default Header;
