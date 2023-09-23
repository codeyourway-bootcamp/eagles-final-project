
import React from "react";
import { CompanyName, Logo, NavbarWrapper } from "../Styles/Styles";
import { ButtonNav } from "../Button/Button";
import { ContainerNav } from "../Container/Container";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const getUrl = useLocation();
  const isLogin = getUrl.pathname === "/login";
  const navegation = useNavigate();

  return (
    <NavbarWrapper>
      <ContainerNav>
        <Logo src="/Img/Logomark.png" alt="Logo da Empresa" />
        <CompanyName>QUICKOPINION</CompanyName>
      </ContainerNav>
      <div>
        <ButtonNav
          onClick={function () {
            navegation("/login");
          }}
        >
          {isLogin ? "Cadastre-se" :  "Login"}
        </ButtonNav>
      </div>
    </NavbarWrapper>
  );
};


