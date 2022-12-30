import React from 'react';
import style from './Botao.module.scss';

interface IProps {
  children?: React.ReactNode,
  type?: 'button' | 'submit' | 'reset' | undefined,
  onClick?: () => void
}

export default function Botao({children, type, onClick}: IProps){
  return(
    <button
      onClick={onClick}
      className={style.botao}
      type={type}
    >
      {children}
    </button>
  );
}