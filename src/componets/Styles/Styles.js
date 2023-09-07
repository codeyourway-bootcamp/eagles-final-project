import {styled, createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
body{
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(29,39,253,1) 50%, rgba(252,176,69,1) 72%, rgba(69,80,252,1) 88%, rgba(0,0,3,1) 99%);
    font-family: Arial;
    color: yellow;
}

`;

export const Container = styled.div`
display: flex;

`

