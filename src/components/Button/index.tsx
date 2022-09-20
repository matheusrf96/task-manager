import React from "react";

import style from './Button.module.scss'

interface Props {
    text: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

const Button = (props: Props) => {
    const { type = "button", onClick } = props

    return (
        <button className={style.btn} type={ type } onClick={ onClick }>
            { props.text }
        </button>
    )
}

export default Button;