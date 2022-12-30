import style from './Lista.module.scss';
import Item from './Item';
import ITarefa from '../../types/ITarefa';

interface IProps{
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Lista({tarefas, selecionaTarefa}: IProps){
  return(
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map( item => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  );
}