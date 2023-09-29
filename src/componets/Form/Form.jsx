/* eslint-disable react/prop-types */
import { user_registration } from "../../FakeDatabase";
import { FormControl, FormLabel, Input, Button, Container} from "./StyleForm.js";

import { useEffect, useState } from "react";
export default function Form(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  // esse hook é executado na montagem do componente.
  useEffect(() => {
    const user = localStorage.getItem("app@user");
    if (user) {
      alert("Usuário já logado");
      //user a funcao do react router dom para mandar o user para pagina de dashboard
      // useHistory().push("/dashboard")
    }
  }, []);

  const Login = () => {
    user_registration.then((users) => {
      users.data.map((user) => {
        console.log(user.user_email, user.user_password, email, password);
        if (user.user_email === email && user.user_password === password) {
          alert("Login efetuado com sucesso");
          localStorage.setItem("app@user", JSON.stringify(user.user_email));
          // useHistory().push("/dashboard")
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