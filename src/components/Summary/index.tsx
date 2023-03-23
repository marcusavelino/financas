import React from 'react'
import { SummaryCard, SummaryContaier, SummaryContainer, SummatyIcon } from "./styles";
import moneyImg from './images/money.png';
import moneyNegativeImg from './images/money-negative.png';
import resultImg from './images/result.png';

export function Summary({outcome, income, total}) {
  return(
    <SummaryContainer>
        <SummaryCard>
          <SummatyIcon variant="green">
            <img src={moneyImg} />
          </SummatyIcon>
          <SummaryContaier>
            <h4>Entradas</h4>
            <h2>R$ {income}</h2>
          </SummaryContaier>
        </SummaryCard>
        <SummaryCard>
          <SummatyIcon variant="red">
            <img src={moneyNegativeImg} />
          </SummatyIcon>
          <SummaryContaier>
            <h4>Saídas</h4>
            <h2>R$ {outcome}</h2>
          </SummaryContaier>
        </SummaryCard>
        <SummaryCard>
          <SummatyIcon variant="blue">
            <img src={resultImg} />
          </SummatyIcon>
          <SummaryContaier>
            <h4>Total</h4>
            <h2>R$ {total}</h2>
          </SummaryContaier>
        </SummaryCard>
    </SummaryContainer>
  )
}