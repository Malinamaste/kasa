import { NavLink } from "react-router-dom";
import whiteLogo from '../assets/logo_white.png';

function Footer() {
  const actualYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <NavLink to="/">
        <img src={whiteLogo} alt='Logo de Kasa' className='footer__logo' />
      </NavLink>
      <p className='footer__text'>
        &copy; {actualYear} Kasa. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;