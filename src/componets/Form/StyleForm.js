import{styled} from'styled-components';



export const Container=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    /* max-width:500px;
    max-height: 500px; */
    `;

export const FormControl=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:480px;
    `;

export const FormLabel=styled.label`
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:start;
    color: #fff;

    width:100%;
    `;

export const Input=styled.input`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:480px;
    `;

export const Button=styled.button`
background-color: #F9A01B;
  color: #fff;
  width: 180px;
  font-size: large;
  padding: 5px 5px;
  border-width: 1px;
  border-color: #fff;
  margin-top: 30px;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 4px 4px 8px  #2D8BBA;


  &:hover {
    background-color: transparent;
  }
`;
