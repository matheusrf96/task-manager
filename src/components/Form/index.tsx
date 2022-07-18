import React from "react";
import Button from "../Button";

import style from './Form.module.scss'

class Form extends React.Component {
    state = {
        task: '',
        time: '00:00:00'
    }

    saveTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(this.state)
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

                <Button text="Adicionar" />
            </form>
        )
    }
}

export default Form;
