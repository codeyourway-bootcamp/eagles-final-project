import React from 'react';
import { ButtonNovoproduto, ButtonProduto, ButtonEnviar  } from '../../componets/Button/Button';
 

export default function Component (props) {
  return (
      <div style={{
        width:'50%',
        height: '290px',
        border: '1px solid white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between'
      }}>   
      <div>
      <ButtonProduto
      onClick={() => {
        alert("Selecione seu produto:");
      }}
      >Produto Selecionado</ButtonProduto >
        <ButtonNovoproduto>Novo Produto</ButtonNovoproduto>
        </div>
<div className='enviar'><ButtonEnviar>Enviar</ButtonEnviar></div>
         {props.children}
      </div>
     
     
    )}
   
       