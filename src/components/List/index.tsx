import React from "react";

import Item from "./Item";
import { ITask } from "../../types/tasks";

import style from './List.module.scss'

function List(props: {tasks: ITask[]}) {
    const tasks = props.tasks

    return (
        <aside className={style.listaTarefas}>
            <h2>
                Today tasks:
            </h2>
            <ul>
                { tasks.map((task, index) => (
                    <Item key={index} {...task} />
                ))}
            </ul>
        </aside>
    )
}

export default List;
