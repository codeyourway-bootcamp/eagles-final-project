import React from "react";
import { CapaImage, Text, H1 } from "../../componets/Styles/Styles";
import { Button } from "../../componets/Button/Button";
import {
  ContainerMain,
  ContainerImage,
  ContainerTxt,
} from "../../componets/Container/Container";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navegate = useNavigate();

  return (
    // Landing page
    <>
      <ContainerMain>
        <ContainerTxt>
          <H1>Saiba sua nota de acordo com seus clientes</H1>
          <Text>
            Receba dados gráficos com as avaliações de seus produtos e serviços.
          </Text>
          <>
            <Button
              onClick={function () {
                navegate("/register");
              }}
            >
              CADASTRE-SE
            </Button>
          </>
        </ContainerTxt>
        <ContainerImage>
          <CapaImage src="/Img/Celular.png" alt="Celular" />
        </ContainerImage>
      </ContainerMain>
    </>
  );
}
