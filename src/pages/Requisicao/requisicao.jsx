import React from 'react';
import { ButtonNav, ButtonNovoproduto, ButtonProduto, ButtonStyle } from '../../componets/Button/Button';


export default function Component (props) {
    return (
      <div style={{
        width:'50%',
        height: '290px',
        border: '1px solid white'
      }}>  
      <ButtonProduto>Produto Selecionado</ButtonProduto > <ButtonNovoproduto>Novo Produto</ButtonNovoproduto>
         {props.children}
      </div>
    )
    }
     
  