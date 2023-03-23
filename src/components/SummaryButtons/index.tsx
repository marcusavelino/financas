import React from 'react'
import { BtnNewOperation, Buttons } from './styles'
import { DialogDemo } from '../Header'
import { RadioMonth } from '../RadioMonth'

export function SummaryButtons ({filter}){
  return(
    <Buttons>
      <RadioMonth filter={filter} />
    </Buttons>
  )
}