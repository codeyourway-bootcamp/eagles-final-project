import React from "react";
import {
  ContainerDash,
  ContainerContact,
  ContainerGraphic,
  ContainerForm,
  ContainerTable,
} from "./StyleDashboard";
import FeedbackForm from "../../componets/FeedbackForm/Form";

export default function Dashboard() {
  return (
    <>
      <ContainerDash>
        <h1>Dashboard</h1>
        <ContainerForm>
            Requisição de feedback
            <FeedbackForm FormTitle ={"Pergunta teste"} Id={1}/>
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
