import React from "react";
import { H1 } from "../../componets/Styles/styles.js";
import Form from "../../componets/Form/Form.jsx";
import { Container } from "../../componets/Container/Container.js";


export default function Register() {
  return (
    <>
      <Container>
        <H1>Cadastre-se Aqui!!!</H1>
        <Form isRegister={true} />
      </Container>
    </>
  );
}
