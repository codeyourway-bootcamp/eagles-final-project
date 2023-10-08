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
import { Grafico } from "../../componets/Charts";

export default function Dashboard() {
  const companyName = "WkInformatica";
  function HandleCopy() {
    navigator.clipboard.writeText(
      `${window.location.origin}/feedback/${companyName}`
    );
  }

  return (
    <>
      <ContainerDash>
        <H1>Bem Vindo!!!</H1>
        <ContainerForm>
          <h2>Requisição de feedback</h2>
          <FeedbackForm />
          <Button onClick={HandleCopy}>Copiar link</Button>
        </ContainerForm>

        <ContainerTable>
          <ContainerContact>
            <ContactForm />
          </ContainerContact>
          <ContainerGraphic>
            <Grafico />
          </ContainerGraphic>
        </ContainerTable>
      </ContainerDash>
    </>
  );
}
