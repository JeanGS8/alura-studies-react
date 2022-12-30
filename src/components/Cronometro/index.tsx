import { useEffect, useState } from "react";
import tempoParaSegundos from "../../common/utils/time";
import ITarefa from "../../types/ITarefa";
import Botao from "../Botao";
import style from './Cronometro.module.scss';
import Relogio from "./Relogio";

interface IProps{
  selecionado: ITarefa | undefined,
  finalizarTarefa: () => void
}

export default function Cronometro({selecionado, finalizarTarefa}: IProps){
  
  const [tempo, setTempo] = useState<number>()

  useEffect(() => {
    if(selecionado?.tempo){
      setTempo(tempoParaSegundos(selecionado?.tempo))
    }
  }, [selecionado])

  function regressiva(contador: number = 0){
    setTimeout(() => {
      if(contador > 0){
        setTempo(contador - 1);
        console.log(contador);
        return regressiva(contador - 1);
      }
      else{
        finalizarTarefa()
      }
    }, 1000);
  }

  return(
    <div className={style.cronometro}>
      <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao onClick={() => regressiva(tempo)}>
        Começar
      </Botao>
    </div>
  )
}