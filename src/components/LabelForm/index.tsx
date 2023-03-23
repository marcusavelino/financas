import React from 'react';
import * as Label from '@radix-ui/react-label';
import { ContainerLabel } from './styles';

export function LabelForm ({name, label, type, changeForm}) {

  function handleChange (event) {
    let id = event.target.id;
    let value = event.target.value;

    changeForm(id, value);    
  }

  return (
    <ContainerLabel>
      <Label.Root className="LabelRoot" htmlFor={name}>
        {label}
      </Label.Root>
      <input className="Input" type={type} id={name} defaultValue=""  onChange={handleChange}  />
    </ContainerLabel>
  )
}
