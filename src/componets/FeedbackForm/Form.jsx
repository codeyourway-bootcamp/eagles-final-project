//import { Textarea } from '@chakra-ui/react';
import React, { useState } from 'react';

const FeedbackForm= () => {
  const [questions, setQuestions] = useState([]); // Lista de perguntas adicionadas
  const [feedback, setFeedback] = useState(""); // Feedback da pergunta selecionada

  const addQuestion = () => {
    const newQuestion = prompt("Digite a pergunta"); // Caixa de diálogo para adicionar pergunta
    setQuestions([...questions, newQuestion]);
  };

  const showFeedback = (question) => {
    const userFeedback = prompt("Digite o feedback para a pergunta: " + question); // Caixa de diálogo para fornecer feedback
    setFeedback(userFeedback);
  };
  
  // const [showTextarea, setShowTextarea] = useState(false);

  // const handleClick = () => {
  //   setShowTextarea(true);
  // };

  return (
    <>
      <button onClick={addQuestion}>Adicionar Pergunta</button>

      {questions.map((question, index) => (
        <div key={index}>
          <p onClick={() => showFeedback(question)}>{question}</p>
          {/* <button onClick={() => showFeedback(question)}>Resposta</button> */}
        </div>
      ))}

      {feedback && <p>{feedback}</p>}
    </>
  );
}

export default FeedbackForm;