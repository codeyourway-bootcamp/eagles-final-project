import { styled, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  background: rgb(4,4,10);
background: linear-gradient(90deg, rgba(4,4,10,1) 0%, rgba(1,8,77,1) 50%, rgba(1,14,173,1) 100%);
font-family: Arial;
    
    

}`;

export const H1 = styled.h1`
color: #fff;
font-size: 50px;
align-items: center;
justify-content: center;
`;

export const H1s = styled(H1)`
color: #ffff;
align-items: center;
font-size: 50px;
justify-content: center;
font-size: 30px;
`;

export const Text = styled.p`
font-size: 30px;
color: #fff;
`;

export const NavbarWrapper = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const Logo = styled.img`
  width: 50px;
  height: auto;
  border-radius: 50%;
  box-shadow: 2px 2px 4px #2D8BBA;
`;

export const CompanyName = styled.h1`
  font-size: 35px;
  margin: 0;
  justify-content: left;
`;

export const CapaImage = styled.img`
width: 250px;
height: 450px;
border-radius: 32px;
box-shadow: 12px 12px 20px black;

`;
 export const Footer = styled.footer`

 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 background-color: #2D8BBA;
 color: #fff;
 font-size: 20px;
 padding: 20px;
 margin-top: 100px;
 border-radius: 10px;
 box-shadow: 2px 2px 4px #2D8BBA;

 
 `;

