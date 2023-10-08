//import { Textarea } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Button } from '../Button/Button';

const FeedbackForm= () => {
  const [questions, setQuestions] = useState([]); 
  const [feedback, setFeedback] = useState(""); 

  const addQuestion = () => {
    const newQuestion = prompt("Digite a pergunta"); 
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
      <Button onClick={addQuestion}>Nova Pergunta</Button>

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