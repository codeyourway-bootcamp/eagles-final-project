import React from "react";
import {
  ContainerDash,
  ContainerContact,
  ContainerGraphic,
  ContainerForm,
  ContainerTable,
} from "./StyleDashboard";
import FeedbackForm from "../../componets/FeedbackForm/Form";
import{H1} from "../../componets/Styles/styles";



export default function Dashboard() {
  return (
    <>
      <ContainerDash>
        <H1>Dashboard</H1>
        <ContainerForm>
            <h2>Requisição de feedback</h2>
            <FeedbackForm/>
            
            
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
