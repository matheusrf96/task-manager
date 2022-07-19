import React from "react";
import { ITask } from "../../../types/tasks";

import style from '../List.module.scss'

interface Props extends ITask {
    selectTask: (seletedTask: ITask) => void,
}

const Item = ({id, task, time, selected, completed, selectTask}: Props) => {
    return (
        <li
            className={style.item}
            onClick={() => selectTask({
                id,
                task,
                time,
                selected,
                completed,
            })}
        >
            <h3>{ task }</h3>
            <span>{ time }</span>
        </li>
    )
}

export default Item;
