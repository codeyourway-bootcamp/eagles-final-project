import { styled} from "styled-components";

export const Button = styled.button`
  background-color: #F9A01B;
  color: #fff;
  width: 180px;
  font-size: large;
  padding: 15px 25px;
  border: none;
  border-radius: 30px;
  cursor: pointer;


  &:hover {
    background-color: transparent;
    
  }
`;
export const ButtonNav = styled(Button)`
 background-color: transparent;
  color: #fff;
  border:  8px;
  border-color: white;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #F9A01B;
  }
`;
