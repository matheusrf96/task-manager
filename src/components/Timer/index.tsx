import Button from "../Button";
import Clock from "./Clock";

import style from './Timer.module.scss'

const Timer = () => {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Choose a card and start the timer</p>
            <div className={style.relogioWrapper}>
                <Clock />
            </div>

            <Button text="Start" />
        </div>
    )
}

export default Timer
