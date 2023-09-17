import { styled, createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
body{
   
  background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(29,39,253,1) 50%, rgba(252,176,69,1) 72%, rgba(69,80,252,1) 88%, rgba(0,0,3,1) 99%);
    font-family: Arial;
    

}`;

export const H1 = styled.h1`
  color: #fff;
  font-size: 50px;
`;

export const H1s = styled(H1)`
  color: #fff;
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
  box-shadow: 2px 2px 4px #2d8bba;
`;

export const CompanyName = styled.h1`
  font-size: 35px;
  margin: 0;
  justify-content: left;
`;

export const CapaImage = styled.img`
  width: 250px;
  height: 450px;
  box-shadow: 12px 12px 20px black;
`;
