import React, { useState } from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import ITarefa from '../../types/ITarefa';
import { v4 as uuidv4} from 'uuid';

interface IProps{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

export default function Formulario ({setTarefas} : IProps) {

  const [tarefa, setTarefa] = useState('');
  const [tempo, setTempo] = useState('00:00')

  function adicionarTarefa(event: React.FormEvent<HTMLFormElement>){
    event?.preventDefault();

    setTarefas(tarefasAntigas => 
    [
      ...tarefasAntigas,
      {
        tarefa,
        tempo,
        selecionado:false,
        completado: false,
        id: uuidv4()
      }
    ])

    setTarefa('')
    setTempo('00:00')
  }
  
  return(
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor='tarefa'>
          adiciona um novo estudo
        </label>
        <input
          type='text'
          name='tarefa'
          value={tarefa}
          onChange={event => setTarefa(event.target.value)}
          id='tarefa'
          placeholder='O que você quer estudar'
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor='tempo'>
          Tempo
        </label>
        <input
          type='time'
          step='1'
          name='tempo'
          value={tempo}
          onChange={event => setTempo(event.target.value)}
          id='tempo'
          min='00:00:00'
          max='01:30:00'
          required
        />
      </div>
      <Botao type='submit'>
        Adicionar
      </Botao>
    </form>
  );
}