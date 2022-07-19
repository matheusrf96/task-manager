import { useState } from "react";

import Button from "../Button";
import Clock from "./Clock";
import { ITask } from "../../types/tasks";
import { timeToSeconds } from "../../common/utils/time";

import style from './Timer.module.scss'

interface Props {
    selected: ITask | undefined,
}

const Timer = ({ selected }: Props) => {
    const [time, setTime] = useState<number>()

    // It'll break
    if (selected?.time) {
        setTime(timeToSeconds(selected.time))
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Choose a card and start the timer</p>
            { time }

            <div className={style.relogioWrapper}>
                <Clock />
            </div>

            <Button text="Start" />
        </div>
    )
}

export default Timer
