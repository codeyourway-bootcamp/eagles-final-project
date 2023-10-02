import React from 'react';
import { ButtonNovoproduto, ButtonProduto, ButtonEnviar  } from '../../componets/Button/Button';
import { Input } from '@chakra-ui/react';


export default function Component (props) {
   //colocar aqui

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

        <input
        type='text'
        placeholder='Nome da Empresa'
        >
        
        </input>
        </div>
<div className='enviar'><ButtonEnviar>Enviar</ButtonEnviar></div>
         {props.children}
      </div>
     
     
    )}
   
       