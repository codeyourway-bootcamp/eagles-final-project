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



//############################################


// import React from 'react';
// import { useForm, useFieldArray } from 'react-hook-form';

// const FeedbackForm = () => {
//   const { control, handleSubmit } = useForm();
//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: 'questions',
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {fields.map((item, index) => (
//         <div key={item.id}>
//           <label>  {index + 1}</label>
//           <input {...control.register(`questions.${index}.question`)} />

//           <label>Resposta #{index + 1}</label>
//           <textarea {...control.register(`questions.${index}.answer`)} />

//           <button type="button" onClick={() => remove(index)}>
//             Remover Pergunta
//           </button>
//         </div>
//       ))}

//       <button type="button" onClick={() => append({ question: '', answer: '' })}>
//         Adicionar Pergunta
//       </button>

//       <button type="submit">Enviar</button>
//     </form>
//   );
// };

// export default FeedbackForm;

