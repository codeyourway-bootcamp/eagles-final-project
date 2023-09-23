import React from "react";
import {
  ContainerDash,
  ContainerContact,
  ContainerGraphic,
  ContainerForm,
  ContainerTable,
} from "./StyleDashboard";
import FeedBack from "../../componets/FeedbackForm/Form";

export default function Dashboard() {
  return (
    <>
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
