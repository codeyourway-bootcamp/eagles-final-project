import React from 'react'
import { H1 } from '../../componets/Styles/styles.js'
import Form from '../../componets/Form/Form'
import { Container } from '../../componets/Container/Container.js'


export default function Register() {
  return (
    <>
    <Container>
    <H1>Cadartre-se Aqui!</H1>
    <Form isRegister={true}/>
    </Container>
    </>
  )
};
