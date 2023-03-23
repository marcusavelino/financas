import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import './styles.css';
import { BtnNewOperation } from '../SummaryButtons/styles';
import circle from '../SummaryButtons/images/add.png'
import { LabelForm } from '../LabelForm';
import { SelectMounth } from '../SelectMounth';
import { RadioTypes } from '../RadioTypes';

export function DialogDemo({addOperation}) {
  const [ formOperation, setFormOperation ] = useState({
    descricao: '',
    ano: '',
    mes: '',
    fonte: '',
    valor: '',
    categoria: '',
    tipo: 'saida'
  });

  function handleOparationSubmit(event) {
    event.preventDefault();
    addOperation(formOperation);
  }
  
  function changeForm(id, value) {
    switch(id) {
      case 'descricao':
        setFormOperation(prevState => ({ ...formOperation , descricao: value}))
        break;
      case 'ano':
        setFormOperation(prevState => ({ ...formOperation , ano: value}))
        break;
      case 'mes':
        setFormOperation(prevState => ({ ...formOperation , mes: value}))
        break;
      case 'fonte':
        setFormOperation(prevState => ({ ...formOperation , fonte: value}))
        break;
      case 'valor':
        setFormOperation(prevState => ({ ...formOperation , valor: value}))
        break;
      case 'categoria':
        setFormOperation(prevState => ({ ...formOperation , categoria: value}))
        break;
      case 'tipo':
        setFormOperation(prevState => ({ ...formOperation , tipo: value}))
        break;
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <BtnNewOperation>
          Novo <img src={circle} />
        </BtnNewOperation>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Cadastro de Nova Operação</Dialog.Title>
          <form onSubmit={handleOparationSubmit}>
            <LabelForm name="descricao" label="Descrição: " type="text" changeForm={changeForm} />
            <RadioTypes changeForm={changeForm} />
            <LabelForm name="valor" label="Valor: " type="text" changeForm={changeForm} />
            <LabelForm name="ano" label="Ano: " type="number" changeForm={changeForm} />
            <SelectMounth changeForm={changeForm} />
            <LabelForm name="fonte" label="Fonte: " type="text" changeForm={changeForm} />
            <LabelForm name="categoria" label="Categoria: " type="text" changeForm={changeForm} />
            <button className="ButtonDialogForm">
              Cadastrar Nova Operação
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}