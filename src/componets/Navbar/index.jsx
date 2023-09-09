import React from 'react';
import Logo from '../../../public/Logo/Logo.png'; // Importe o logotipo da sua empresa
import { ImgLogo } from '../Styles/styles';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <ImgLogo src={Logo}  alt="Logo da Empresa" />
        <span>Nome da Empresa</span>
      </div>
      <div className="navbar-login">
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;