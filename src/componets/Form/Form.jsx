/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import { user_registration } from "../../FakeDatabase";
import { FormControl, FormLabel, Input, Button, Container} from "./StyleForm.js";

import { useEffect, useState } from "react";
export default function Form(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("app@user");
    if (user) {
     navigate("/dashboard")
   
    }
  }, []);
  const navigate = useNavigate()

  const Login = () => {
    user_registration.then((users) => {
      users.data.map((user) => {
        if (user.user_email === email && user.user_password === password) {
          localStorage.setItem("app@user", JSON.stringify(user.user_email));
          navigate("/dashboard")
        }
      });
    });
  };

  const Registro = () => {
    console.log("Funcao de registro");
  };

  return (
    <Container>
      {props.isRegister ? (
        <>
          {" "}
          <FormControl>
            <FormLabel>Nome</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Sobrenome</FormLabel>
            <Input
              type="text"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
            />
          </FormControl>
        </>
      ) : null}

      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      {props.isRegister ? (
        <Button
          marginY={"3"}
          onClick={() => {
            console.log("Clicou no botão", sobrenome, name, password, email);
            Registro();
          }}
        >
          Registrar
        </Button>
      ) : (
        <Button
          marginY={"3"}
          onClick={() => {
            console.log("Clicou no botão", sobrenome, name, password, email);
            Login();
          }}
        >
          Entrar
        </Button>
      )}
    </Container>
  );
}