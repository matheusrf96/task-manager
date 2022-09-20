import React, { useState } from "react";

import Button from "../Button";
import { ITask } from "../../types/tasks";

import style from './Form.module.scss'
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Form({ setTasks }: Props) {
    const [task, setTask] = useState("")
    const [time, setTime] = useState("00:00")

    function saveTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setTasks((oldTasks) => [
            ...oldTasks,
            {
                task,
                time,
                selected: false,
                completed: false,
                id: uuidv4(),
            }
        ])

        setTask("")
        setTime("00:00")
    }

    return (
        <form action="" className={style.novaTarefa} onSubmit={ saveTask }>
            <div className={style.inputContainer}>
                <div>
                    <label htmlFor="task">Task: </label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder="What do you want to do?"
                        required
                        value={task}
                        onChange={e => setTask(e.target.value)}
                    />
                </div>
            </div>

            <div className={style.inputContainer}>
                <div>
                    <label htmlFor="time">Time: </label>
                    <input
                        type="time"
                        step="1"
                        name="time"
                        id="time"
                        min="00:00:00"
                        max="03:00:00"
                        required
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />
                </div>
            </div>

            <Button text="Adicionar" type="submit" />
        </form>
    )
}

export default Form;
