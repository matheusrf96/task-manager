import React from "react";

import style from './List.module.scss'

function List() {
    const tasks = [{
        task: 'React',
        time: '02:00:00',
    }, {
        task: 'JS',
        time: '01:30:00',
    }, {
        task: 'TypeScript',
        time: '03:00:00',
    }]

    return (
        <aside className={style.listaTarefas}>
            <h2>Today tasks: </h2>
            <ul>
                { tasks.map((task, index) => (
                    <li key={ index } className={style.item}>
                        <h3>{ task.task }</h3>
                        <span>{ task.time }</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;
