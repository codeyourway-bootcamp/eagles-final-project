import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../componets/Button/Button";

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

//const Avaliacao = () => {
// const [avaliacao, setAvaliacao] = useState(localStorage.getItem('avaliacao') || 0);

//useEffect(() => {
//localStorage.setItem("avaliacao", avaliacao);
//}, [avaliacao]);

//const handleChange = (event) => {
//setAvaliacao(event.target.value);
//};

function Feedback() {
  const navigate = useNavigate();
  const params = useParams();
  const [rating, setRating] = useState(0);
  const [feedbackInput, setFeedbackInput] = useState("");
  const [buttomColors, setButtomColors] = useState([
    "red",
    "#FF7200",
    "#ffc222",
    "green",
    "blue",
    "black",
  ]);
  const submitAvaliacao = () => {
    const avaliacoesGravadas =
      JSON.parse(localStorage.getItem("@avaliacoes")) || [];
    const novaAvaliacao = {
      rating,
      feedback: feedbackInput,
      company: params.companyId,
    };
    avaliacoesGravadas.push(novaAvaliacao);
    localStorage.setItem("@avaliacoes", JSON.stringify(avaliacoesGravadas));
    alert("Avaliação enviada com sucesso");
    navigate("/");
  };
  return (
    <MainContainer>
      <Title>Como voce avaliaria esse produto ?</Title>
      <Title>nome e link do produto</Title>
      <div>
        <FeedbackButton
          state={rating}
          color={buttomColors[0]}
          text={1}
          onClick={() => {
            setRating(1);
            buttomColors[0] = buttomColors[5];
            setButtomColors([...buttomColors]);
            alert("Muito ruim");
          }}
        />
        <FeedbackButton
          state={rating}
          color={buttomColors[1]}
          text={2}
          onClick={() => {
            setRating(2);
            buttomColors[1] = buttomColors[5];
            setButtomColors([...buttomColors]);
            alert("Ruim");
          }}
        />
        <FeedbackButton
          state={rating}
          color={buttomColors[2]}
          text={3}
          onClick={() => {
            setRating(3);
            buttomColors[2] = buttomColors[5];
            setButtomColors([...buttomColors]);
            alert("Bom");
          }}
        />
        <FeedbackButton
          state={rating}
          color={buttomColors[3]}
          text={4}
          onClick={() => {
            setRating(4);
            buttomColors[3] = buttomColors[5];
            setButtomColors([...buttomColors]);
            alert("Otimo");
          }}
        />
        <FeedbackButton
          state={rating}
          color={buttomColors[4]}
          text={5}
          onClick={() => {
            setRating(5);
            buttomColors[4] = buttomColors[5];
            setButtomColors([...buttomColors]);
            alert("Excelente");
          }}
        />
      </div>
      <Feedbackinput
        rows={10}
        value={feedbackInput}
        onChange={(e) => {
          setFeedbackInput(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          submitAvaliacao();
        }}
      >
        enviar
      </Button>
    </MainContainer>
  );
}

export default Feedback;

function FeedbackButton({ color, onClick, text, state }) {
  console.log(text, state);
  const ButtonContainer = styled.button`
    height: 60px;
    width: 60px;
    border-radius: 50px;
    background-color: ${(props) => (props.color ? props.color : "blue")};
    border-color: ${(props) =>
      props.text === props.state ? "black" : props.color};
    border-width: 5px;
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
