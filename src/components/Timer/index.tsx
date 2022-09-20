import { useEffect, useState } from "react";

import Button from "../Button";
import Clock from "./Clock";
import { ITask } from "../../types/tasks";
import { timeToSeconds } from "../../common/utils/time";

import style from './Timer.module.scss'

interface Props {
    selected: ITask | undefined,
    finishTask: () => void,
}

const Timer = ({ selected, finishTask }: Props) => {
    const [time, setTime] = useState<number>()

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(selected.time))
        }
    }, [selected])

    function regressiveCount(counter: number = 0) {
        setTimeout(() => {
            if (counter > 0) {
                setTime(counter - 1)
                return regressiveCount(counter - 1)
            }

            finishTask()
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Choose a card and start the timer</p>

            <div className={style.relogioWrapper}>
                <Clock time={time} />
            </div>

            <Button text="Start" onClick={() => regressiveCount(time)} />
        </div>
    )
}

export default Timer
