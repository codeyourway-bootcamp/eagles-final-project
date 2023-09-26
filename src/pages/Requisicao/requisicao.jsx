import React from 'react';

function Component (props) {
    return (
      <div style={{
        width:'100%',
        height: '400px',
        border: '1px solid red'
      }}>  
         {props.children}
      </div>
    )
    }
     
  