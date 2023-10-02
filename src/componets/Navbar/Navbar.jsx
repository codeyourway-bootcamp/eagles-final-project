
// import React from "react";
// import { CompanyName, Logo, NavbarWrapper } from "../Styles/styles";
// import { ButtonNav } from "../Button/Button";
// import { ContainerNav } from "../Container/Container";
// import { useLocation, useNavigate } from "react-router-dom";

// export default function Navbar(props) {
//   const getUrl = useLocation();
//   const isLogin = getUrl.pathname === "/login";
//   const isDashboard = getUrl.pathname === "/dashboard";
//   const isRegister = getUrl.pathname === "/register";
//   const isHome = getUrl.pathname === "/";

//   const navegation = useNavigate();

//   return (
//     <NavbarWrapper>
//       <ContainerNav>
//         <Logo src="/Img/Logomark.png" alt="Logo da Empresa" />
//         <CompanyName>QUICKOPINION</CompanyName>
//       </ContainerNav>
//       <div>
//         <ButtonNav
//           onClick={function () {
//             navegation("/login");
//           }}
//         >
//           {isLogin ? "Cadastre-se" :  "null"}
//           {isRegister ? "Login" : "null"}
//           {isDashboard? "Sair" : "null"}
//           {isHome? "Login" : "null"}
//         </ButtonNav>
//       </div>
//     </NavbarWrapper>
//   );
// };
import React from "react";
import { CompanyName, Logo, NavbarWrapper } from "../Styles/styles";
import { ButtonNav } from "../Button/Button";
import { ContainerNav } from "../Container/Container";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const getUrl = useLocation();
  const isLogin = getUrl.pathname === "/login";
  const isDashboard = getUrl.pathname === "/dashboard";
  const isRegister = getUrl.pathname === "/register";
  const isHome = getUrl.pathname === "/";
  const isFeedback = getUrl.pathname === "/feedback";
  const isRequisicao = getUrl.parthname === "/requisicao";

  const navegation = useNavigate();
  const navegationRegister = useNavigate("/register");

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
            // navegationRegister("/register");
          }}
        >
          {isLogin ? "Registre-se" :  ""}
          {isRegister ? "Login" : ""}
          {isDashboard? "Sair" : ""}
          {isHome? "Login" : " "}
          {isFeedback? "Sair" : ""}
          {isRequisicao? "Sair" : ""}
        </ButtonNav>
      </div>
    </NavbarWrapper>
  );
};