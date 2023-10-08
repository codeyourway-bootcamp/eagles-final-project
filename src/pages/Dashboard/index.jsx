import React from "react";
import {
  ContainerDash,
  ContainerContact,
  ContainerGraphic,
  ContainerForm,
  ContainerTable,
} from "./StyleDashboard";

import FeedbackForm from "../../componets/FeedbackForm/Form";
import { H1 } from "../../componets/Styles/styles";
import ContactForm from "../../componets/ContactForm/ContactForm";
import { Button } from "../../componets/Button/Button";
// import Grafico from "../../componets/Charts/Charts.jsx";

export default function Dashboard() {
  const companyName = "WkInformatica";
  function HandleCopy() {
    navigator.clipboard.writeText(
      `${window.location.origin}/feedback/${companyName}`
    );
  }

  return (
    <>
      <Button onClick={HandleCopy}>Copiar Link do Feedback</Button>
      <ContainerDash>
        <H1>Dashboard</H1>
        <ContainerForm>
          <h2>Requisição de feedback</h2>
          <FeedbackForm />
        </ContainerForm>

        <ContainerTable>
          <ContainerContact>
            <ContactForm />
          </ContainerContact>
          <ContainerGraphic>
            Gráfico
            {/* <Grafico/> */}
          </ContainerGraphic>
        </ContainerTable>
      </ContainerDash>
    </>
  );
}
