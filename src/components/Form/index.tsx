import React from "react";
import Button from "../Button";

import style from './Form.module.scss'

const Form = () => (
    <form action="" className={style.novaTarefa}>
        <div className={style.inputContainer}>
            <div>
                <label htmlFor="task">Task: </label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    placeholder="What do you want to do?"
                    required
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
                />
            </div>
        </div>

        <Button/>
    </form>
);

export default Form;
