import React from "react";
import { ITask } from "../../../types/tasks";

import style from './Item.module.scss'

interface Props extends ITask {
    selectTask: (seletedTask: ITask) => void,
}

const Item = ({id, task, time, selected, completed, selectTask}: Props) => {
    return (
        <li
            className={`${style.item} ${selected ? style.itemSelecionado : ''} ${completed ? style.itemCompletado : '' }`}
            onClick={() => !completed && selectTask({
                id,
                task,
                time,
                selected,
                completed,
            })}
        >
            <h3>{ task }</h3>
            <span>{ time }</span>
            {completed && <span className={style.concluido} aria-label="Completed Task"></span>}
        </li>
    )
}

export default Item;
