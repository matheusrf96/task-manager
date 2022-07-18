import React from "react";
import { ITask } from "../../../types/tasks";

import style from '../List.module.scss'

const Item = ({id, task, time, selected, completed}: ITask) => {
    console.log({id, task, time, selected, completed})

    return (
        <li className={style.item}>
            <h3>{ task }</h3>
            <span>{ time }</span>
        </li>
    )
}

export default Item;
