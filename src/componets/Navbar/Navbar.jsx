import React from "react";
import { CompanyName, Logo, NavbarWrapper } from "../Styles/Styles";
import { ButtonNav } from "../Button/Button";
import { ContainerNav } from "../Container/Container";




export default function Navbar() {
    return (
      <NavbarWrapper>
        <ContainerNav>
          <Logo src="/Img/Logomark.png" alt="Logo da Empresa" />
          <CompanyName>QUICKOPINION</CompanyName>
        </ContainerNav>
        <div>
          {/* <ButtonNav>Register</ButtonNav> */}
          <ButtonNav>Login</ButtonNav>
        </div>
      </NavbarWrapper>
    );
  };
  