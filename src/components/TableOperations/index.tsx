import React from 'react'
import { TableContainer, TypeHighLight } from './styles'

export function TableOperations({content}) {
  return(
    <TableContainer>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ano</th>
          <th>Mês</th>
          <th>Fonte</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {
          content.map((line, key) => {
            if(Object.keys(line).length !== 0) {
              return(
                <tr key={key}>
                  <td>{line.descricao}</td>
                  <td>{line.ano}</td>
                  <td>{line.mes}</td>
                  <td>{line.fonte}</td>
                  <td>R$ {line.valor},00</td>
                  <td>{line.categoria}</td>
                  <td>
                    <TypeHighLight variant={line.tipo}>
                      {line.tipo}
                    </TypeHighLight>
                    
                  </td>
                </tr>
              )
            }
          })
        }
      </tbody>
    </TableContainer>
  )
}