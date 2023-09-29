import React from 'react'
import { H1 } from '../../componets/Styles/styles.js'
import Form from '../../componets/Form/Form'
import { Container } from '../../componets/Container/Container.js'
import { useEffect, useState } from "react";
import { user_registration } from "../../FakeDatabase";


export default function Register() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    user_registration.then((data) => {
      setUsers(data);
    });
  }, []);

  return (  
  <>
    {users
      ? users.data[0].user_fullname + " " + users.data[0].user_email
      : "Carregando..."}{" "}
  
    <Container>
    <H1>Cadartre-se Aqui!</H1>
    <Form isRegister={true}/>
    </Container>
    </>
  )
};
