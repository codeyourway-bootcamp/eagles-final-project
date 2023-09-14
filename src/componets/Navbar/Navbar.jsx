import React from "react";
import { CompanyName, Logo, NavbarWrapper } from "../Styles/Styles";
import { ButtonNav } from "../Button/Button";
import { ContainerNav } from "../Container/Container";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const getUrl = useLocation();
  const isLogin = getUrl.pathname === "/login";
  const navegation = useNavigate();

export default function Navbar() {
    return (
      <NavbarWrapper>
        <ContainerNav>
          <Logo src="/Img/Logomark.png" alt="Logo da Empresa" />
          <CompanyName>QUICKOPINION</CompanyName>
        </ContainerNav>
        <div>
          <ButtonNav>Cadastre-se</ButtonNav> 
          <ButtonNav>Login</ButtonNav>
        </div>
      </NavbarWrapper>
    );
  };
  


