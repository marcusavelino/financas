import styled, { css } from "styled-components";

export const SummaryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 2rem;
  gap: 55px;
  width: 100%;
`;

export const SummaryCard = styled.div`
  height: 135px;
  background-color: ${props => props.theme['white']};
  display: grid;
  grid-template-columns: 110px 1fr;
`
interface SummaryIconProps {
  variant?: 'green' | 'red' | 'blue';
}

export const SummatyIcon = styled.div<SummaryIconProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-self: center;

  ${props => props.variant === 'green' && css`
    background-color: ${props => props.theme['green-200']};
  `}

  ${props => props.variant === 'red' && css`
    background-color: ${props => props.theme['red-300']};
  `}

  ${props => props.variant === 'blue' && css`
    background-color: ${props => props.theme['blue-200']};
  `}

  img {
    align-self: center;
  }
`
export const SummaryContaier = styled.div`
  background-color: ${props => props.theme['white']};
  width: 100%;
  height: 100%;
  padding: 1.3rem;

  h4 {
    color: ${props => props.theme['gray-400']};
    font-weight: 400;
  }

  h2 {
    font-size: 30px;
    padding-top: 15px;
  }
`