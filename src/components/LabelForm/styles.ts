import styled from "styled-components";

export const ContainerLabel = styled.div`
  display: 'flex';
  flex-wrap: 'wrap';
  gap: 15;
  align-items: 'center';
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  .LabelRoot {
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    color: ${props => props.theme['gray-500']};
    font-weight: 300;
  }

  .Input {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 0 10px;
    height: 35px;
    font-size: 15px;
    line-height: 1;
    border: 1px solid gray;

    &:focus {
      box-shadow: 0 0 0 1px ${props => props.theme['green-200']};
    }

    &::selection {
      background-color: black;
      color: white;
    }
  }
`;