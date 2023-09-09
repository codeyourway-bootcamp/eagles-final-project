import React from "react";
// import { Btn } from "../Button/Button";


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo da Empresa" />
        <span>Quick Opinion</span>
      </div>
      <div className="navbar-login">
        {/* <Btn>Login</Btn> */}
      </div>
    </nav>
  );
};
