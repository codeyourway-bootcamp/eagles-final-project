import React from "react";
import styled from "styled-components";

// import { Container } from './styles';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  flex-direction: column;
  gap: 30px;
`;
const Title = styled.h1`
  color: white;
`;
const Feedbackinput = styled.textarea`
  border-width: 5px;
  background-color: #060624;
  border-radius: 20px;
  width: 545px;
  height: 250px;
  color: white;
  font-size: 18px;
  padding: 10px;
`;

const ButtonEnviar = styled.button``;

function Feedback() {
  return (
    <MainContainer>
      <Title>Como voce avaliaria esse produto ?</Title>
      <h2>nome e link do produto</h2>
      <div>
        <FeedbackButton
          color={"red"}
          text={"1"}
          onClick={() => {
            alert("botao clicado");
          }}
        />
        <FeedbackButton
          color={"orange"}
          text={"2"}
          onClick={() => {
            alert("botao clicado");
          }}
        />
        <FeedbackButton
          color={"light-orange"}
          text={"3"}
          onClick={() => {
            alert("botao clicado");
          }}
        />
        <FeedbackButton
          color={"yellow"}
          text={"4"}
          onClick={() => {
            alert("botao clicado");
          }}
        />
        <FeedbackButton
          color={"green"}
          text={"5"}
          onClick={() => {
            alert("botao clicado");
          }}
        />
      </div>
      <Feedbackinput rows={10} />
      <ButtonEnviar>enviar</ButtonEnviar>
    </MainContainer>
  );
}

export default Feedback;

function FeedbackButton({ color, onClick, text }) {
  const ButtonContainer = styled.button`
    height: 60px;
    width: 60px;
    border-radius: 50px;
    background-color: ${(props) => (props.color ? props.color : "blue")};
  `;

  const ButtonText = styled.p`
    font-size: 18px;
    font-weight: bold;
  `;
  return (
    <ButtonContainer color={color} onClick={onClick}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
}
