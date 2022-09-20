
import style from './Clock.module.scss'

interface Props {
    time: number | undefined
}

const Clock = ({ time = 0 }: Props) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [minuteDigit1, minuteDigit2] = String(minutes).padStart(2, '0')
    const [secondDigit1, secondDigit2] = String(seconds).padStart(2, '0')

    return (
        <>
            <span className={style.relogioNumero}>{ minuteDigit1 }</span>
            <span className={style.relogioNumero}>{ minuteDigit2 }</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{ secondDigit1 }</span>
            <span className={style.relogioNumero}>{ secondDigit2 }</span>
        </>
    )
}

export default Clock
