import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import './styles.css';

export function RadioMonth ({filter}){

  const months = [
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

  function filterMonth(month) {
    filter(month);
  }

  return (
    <RadioGroup.Root className="RadioGroupRoot" onValueChange={filterMonth} defaultValue="all">
      {        
        months.map(month => {
          return (
            <div style={{ display: 'flex', alignItems: 'center' }} key={month}>
              <RadioGroup.Item value={month} id={month} className="RadioGroupItem" >
                {month}
              </RadioGroup.Item>
            </div>
          )
        })
      }
    </RadioGroup.Root>
  );
}