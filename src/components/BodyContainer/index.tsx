import React, { useEffect, useState } from 'react'
import { DialogDemo } from '../FormHeader';
import { Header } from '../FormHeader/styles';
import { Summary } from '../Summary';
import { SummaryButtons } from '../SummaryButtons';
import { TableOperations } from '../TableOperations';
import { Container } from "./styles";

export function BodyContainer () {

  const [ outcomeSummary, setOutcomeSummary ] = useState(0)
  const [ incomeSummary, setIncomeSummary ] = useState(0)
  const [ totalSummary, setTotalSummary ] = useState(0)

  interface OperationType {
    descricao: string;
    ano: number;
    mes: 'string';
    valor: 'string';
    fonte: string;
    categoria: string;
    tipo: 'entrada' | 'saida';
  }

  const [ operations, setOperations ] = useState([{} as OperationType]);
  const [ showOperations, setShowOperations ] = useState(operations);

  function changeOperations(filter) {
    let filterOperations;

    if(filter == 'all') {
      filterOperations = operations;
    } else {
      filterOperations = operations.filter(operation => {
        // FAZER FILTRO DIREITO AQUI
        return operation.mes == filter
      })
    }

    setShowOperations(filterOperations);
  }

  function handleAddOperation(newOperation) {
    setOperations(prev => ([...operations, newOperation ]));
    
    if( newOperation.tipo === 'entrada' ) {
      let incomeSum = incomeSummary +  parseFloat(newOperation.valor);
      let total = totalSummary + parseFloat(newOperation.valor);
      setIncomeSummary(incomeSum);
      setTotalSummary(total);
    }
    
    if( newOperation.tipo === 'saida' ) {
      let outcomeSum = outcomeSummary +  parseFloat(newOperation.valor);
      let total = totalSummary - parseFloat(newOperation.valor);
      setOutcomeSummary(outcomeSum);
      setTotalSummary(total);
    }
  }

  useEffect(() => {
    let outcome = 0;
    let income = 0;
    let total = 0;

    operations.forEach(operation => {
      if(operation.tipo === 'entrada') {
        income += parseFloat(operation.valor);
        total += parseFloat(operation.valor);
      }
      if(operation.tipo === 'saida') {
        outcome += parseFloat(operation.valor);
        total -= parseFloat(operation.valor);
      }
    })

    setOutcomeSummary(outcome)
    setIncomeSummary(income)
    setTotalSummary(total)

    setShowOperations(operations);
  }, [operations])

  return(
    <Container>
      <Header>
        <DialogDemo addOperation={handleAddOperation} />
      </Header>
      <Summary income={incomeSummary} outcome={outcomeSummary} total={totalSummary} />
      <SummaryButtons filter={changeOperations} />
      <TableOperations content={showOperations} />
    </Container>
  )
}