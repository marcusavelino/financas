import React from 'react'
import * as RadioGroup from '@radix-ui/react-radio-group';
import { ContainerRadioTypes } from './styles';

export function RadioTypes({changeForm}) {
  function handleChangeType(event) {
    let id = event.target.name;
    let value = event.target.value;
    changeForm(id, value);
  }

  return(
    <RadioGroup.Root className="RadioGroupRoot" name="tipo" onChange={handleChangeType} defaultValue="saida">
      {        
        <ContainerRadioTypes>
          <RadioGroup.Item value='entrada' className="RadioGroupItem" >
            ENTRADA
          </RadioGroup.Item>
          <RadioGroup.Item value='saida' className="RadioGroupItem" >
            SAÍDA
          </RadioGroup.Item>
        </ContainerRadioTypes>
      }
    </RadioGroup.Root>
  )
}