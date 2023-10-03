import React from "react";
import { useParams } from "react-router-dom";
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
  background-color: #242462;
  border-radius: 20px;
  width: 545px;
  height: 250px;
  color: white;
  font-size: 18px;
  padding: 10px;
`;

const ButtonEnviar = styled.button``;

function Feedback() {
  const Params = useParams()
  console.log(Params)
  return (
    <MainContainer>
      <Title>Como voce avaliaria esse produto ?</Title>
      <Title>nome e link do produto</Title>
      <div>
        <FeedbackButton
          color={"red"}
          text={"1"}
          onClick={() => {
            alert("Muito ruim");
          }}
        />
        <FeedbackButton
          color={"#FF7200"}
          text={"2"}
          onClick={() => {
            alert("Ruim");
          }}
        />
        <FeedbackButton
          color={"#ffc222"}
          text={"3"}
          onClick={() => {
            alert("Bom");
          }}
        />
        <FeedbackButton
          color={"green"}
          text={"4"}
          onClick={() => {
            alert("Otimo");
          }}
        />
        <FeedbackButton
          color={"blue"}
          text={"5"}
          onClick={() => {
            alert("Excelente");
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
    color: white;
  `;
  return (
    <ButtonContainer color={color} onClick={onClick}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
}
