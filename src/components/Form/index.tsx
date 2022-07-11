import React from "react";
import Button from "../Button";

const Form = () => (
    <form action="">
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

        <Button/>
    </form>
);

export default Form;
