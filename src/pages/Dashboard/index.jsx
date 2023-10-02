import React from "react";
import {
  ContainerDash,
  ContainerContact,
  ContainerGraphic,
  ContainerForm,
  ContainerTable,
} from "./StyleDashboard";
import FeedBack from "../../componets/FeedbackForm/Form";
import { Button } from "@chakra-ui/react";

export default function Dashboard() {
  const companyName = "WkInformatica"
  function HandleCopy(){
    navigator.clipboard.writeText(`${window.location.origin}/feedback/${companyName}`)
  }
  return (
    <>
    <Button 
    onClick={HandleCopy}
    >Copiar Link do Feedback</Button>
      <ContainerDash>
        <h1>Dashboard</h1>
        <ContainerForm>
            Requisição de feedback
            <FeedBack/>
        </ContainerForm>
        <ContainerTable>
          <ContainerContact>
           
            Contato
            <li>Wellington</li>
            <li>Amario</li>
            <li>Ana Emilly</li>
            <li>Pedro Lucca</li>
          </ContainerContact>
          <ContainerGraphic>Gráfico</ContainerGraphic>
        </ContainerTable>
      </ContainerDash>
    </>
  );
}
