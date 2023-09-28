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
import ContactForm from "../../componets/ContactForm/ContactForm";
// import Grafico from "../../componets/Charts/Charts.jsx";



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
            <ContactForm />
            
          </ContainerContact>
          <ContainerGraphic>Gráfico
            {/* <Grafico/> */}
          </ContainerGraphic>
        </ContainerTable>
      </ContainerDash>
    </>
  );
}
