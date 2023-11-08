import Logo from "../assets/logo.svg";
import "./Header.css";
export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo" />
      <a href="/">Home</a>
    </header>
  );
};
