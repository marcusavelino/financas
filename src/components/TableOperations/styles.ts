import styled from "styled-components";

export const TableContainer = styled.table`
  padding-top: 20px;
  width: 100%;
  border: none;
  border-spacing: 0;

  thead {
    background-color: ${props => props.theme['black']};
    color: ${props => props.theme['white']};
    text-align: left;

    tr {
      height: 50px;

      th {
        padding: 10px 15px;

        &:first-child {
          border-top-left-radius: 10px;
        }

        &:last-child {
          border-top-right-radius: 10px;
        }
      }
    }
  }

  tbody {
    tr {
      background-color: ${props => props.theme['white']};
      height: 50px;

      &:nth-child(even) {
        background-color: ${props => props.theme['gray-table']};
      }

      td {
        padding: 10px 15px;
        color: ${props => props.theme['gray-table-font']};
        font-weight: 500;

        &:last-child {
          color: ${props => props.theme['green-200']};
        }
      }
    }
  }
`;

interface TypeHighLightProps {
  variant: 'saida' | 'entrada'
}

export const TypeHighLight = styled.span<TypeHighLightProps>`
  color: ${props => props.variant === 'saida' && props.theme['red-300']}
`;