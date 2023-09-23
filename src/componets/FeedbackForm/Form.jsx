import React, { useState } from "react";

export default function FeedBack() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar o feedback para o servidor ou executar outras ações
    console.log(feedback);
  };

  return (
    <div className="FeedBack">
      <h1>Formulário de Feedback</h1>
      <form onSubmit={handleSubmit}>
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
};