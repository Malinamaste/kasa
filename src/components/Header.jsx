import { NavLink } from "react-router-dom";
import Logo from '../assets/logo.svg';

function Header() {
  return (
    <header className="navbar">
      <NavLink to="/">
        <img src={Logo} alt="Logo de Kasa" className="navbar__img"/>
      </NavLink>
      <nav className="navbar__links">
        <NavLink to="/" className={({isActive}) => isActive ? "navbar__links--active" : "navbar__links--inactive"}>
          Accueil
        </NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "navbar__links--active" : "navbar__links--inactive"}>
          A propos
        </NavLink>
      </nav>
    </header>
  )
};

export default Header;
