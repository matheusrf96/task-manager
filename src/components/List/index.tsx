import React from "react";

import Item from "./Item";
import { ITask } from "../../types/tasks";

import style from './List.module.scss'

interface Props {
    tasks: ITask[],
    selectTask: (selectedTask: ITask) => void,
}

function List({ tasks, selectTask }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>
                Today tasks:
            </h2>
            <ul>
                { tasks.map((task, index) => (
                    <Item
                        selectTask={selectTask}
                        key={index}
                        {...task}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;
