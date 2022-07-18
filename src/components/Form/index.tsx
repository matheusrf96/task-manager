import React from "react";

import Button from "../Button";
import { ITask } from "../../types/tasks";

import style from './Form.module.scss'
import { v4 as uuidv4 } from 'uuid';

class Form extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {
    defaultState = {
        task: '',
        time: '00:00:00'
    }

    state = this.defaultState

    saveTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        this.props.setTasks((oldTasks) => [
            ...oldTasks,
            {
                ...this.state,
                selected: false,
                completed: false,
                id: uuidv4(),
            }
        ])

        this.setState(this.defaultState)
    }

    render() {
        return (
            <form action="" className={style.novaTarefa} onSubmit={this.saveTask.bind(this)}>
                <div className={style.inputContainer}>
                    <div>
                        <label htmlFor="task">Task: </label>
                        <input
                            type="text"
                            name="task"
                            id="task"
                            placeholder="What do you want to do?"
                            required
                            value={this.state.task}
                            onChange={e => this.setState({ ...this.state, task: e.target.value })}
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
                            value={this.state.time}
                            onChange={e => this.setState({ ...this.state, time: e.target.value })}
                        />
                    </div>
                </div>

                <Button text="Adicionar" type="submit" />
            </form>
        )
    }
}

export default Form;
