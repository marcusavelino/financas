import styled from "styled-components";

export const ContainerRadioTypes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 17px;
  margin: 10px 0;

  button {
    color: rgb(0, 162, 255);
    background-color: white;
    width: 100%;
    border: 1px solid rgb(0, 162, 255);
  }

  button[data-state="checked"] {
    background-color: rgb(0, 162, 255);
    color: white;
  }

  button:hover {
    background-color: rgb(0, 162, 255);
    color: white;
  }
  
`