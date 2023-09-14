<<<<<<< HEAD
import React from 'react'
=======
import React from "react";
import { CapaImage, H1, Text } from "../../componets/Styles/Styles";
import { Button } from "../../componets/Button/Button";
import {
  ContainerMain,
  ContainerImage,
  ContainerTxt,
} from "../../componets/Container/Container";
 import { useNavigate } from "react-router-dom";


>>>>>>> 38310c1640eba896de89a1c8f54a4b19b5588d70
export default function Home() {
  const navegate = useNavigate()
  return (
    // Landing page
    <>
<<<<<<< HEAD
      <h1>Saiba sua nota de acordo com seus clientes</h1>
      <h2>Receba dados gráficos com as avaliações de seus produtos e serviços </h2>
      <a className="#ffc400 amber accent-3 waves-effect waves-light btn-large">cadastre-se</a>
    </>
  )
=======
      <ContainerMain>
        <ContainerTxt>
          <H1>Saiba sua nota de acordo com seus clientes</H1>
          <Text>
            Receba dados gráficos com as avaliações de seus produtos e serviços.
          </Text>
          <>
            <Button onClick={function (){navegate("/register")}}>CADASTRE-SE</Button>
          </>
        </ContainerTxt>
        <ContainerImage>
          <CapaImage src="/Img/Celular.png" alt="Celular" />
        </ContainerImage>
      </ContainerMain>
    </>
  );
>>>>>>> 38310c1640eba896de89a1c8f54a4b19b5588d70
}
