import styled from "styled-components";

export const Buttons = styled.div`
  text-align: end;
  padding-top: 20px;

  input {
    margin-right: 10px;
    border: 0;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
  }
`

export const BtnNewOperation = styled.button`
  border: 0;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: ${props => props.theme['green-200']};
  color: ${props => props.theme['white']};
  display: inline-flex;
  cursor: pointer;

  img {
    margin-left: 10px;
    width: 20px;
  }
`