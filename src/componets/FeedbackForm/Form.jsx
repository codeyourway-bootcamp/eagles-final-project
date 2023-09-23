import React, { useState } from "react";

function FeedbackForm(props) {
  const [pergunta, setPergunta] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode fazer algo com a pergunta e o feedback, como enviar para um servidor ou armazenar em algum lugar

    // Reseta os campos do formulário
    setPergunta("");
    setFeedback("");
  };

  return (
    <div>
      <h1>{props.FormTitle}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pergunta">{props.Id}:</label>
        <input
          type="text"
          id="pergunta"
          value={pergunta}
          onChange={(e) => setPergunta(e.target.value)}
        />

        <label htmlFor="feedback">Feedback:</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FeedbackForm;