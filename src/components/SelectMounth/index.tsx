import React from 'react';
import { SelectMonthsContainer } from './styles';

export function SelectMounth ({changeForm}) {
  const months = [
    '-- SELECIONE UM MÊS --',
    'janeiro',
    'fevereiro',
    'março', 
    'abril', 
    'maio', 
    'junho', 
    'julho', 
    'agosto', 
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
    'all'
  ]

  function changeMounth(event) {
    let id = event.target.name;
    let value = event.target.value;
    console.log(id, value);

    changeForm(id, value); 
  }

  return (
    <SelectMonthsContainer>
      <label>Mês</label>
      <select name="mes" onChange={changeMounth}>
        {
          months.map(month => {
            return(<option value={month} key={month}>{month}</option>)
          }) 
        }
      </select>
    </SelectMonthsContainer>
  )
};