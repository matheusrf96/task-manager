import React from "react";

import style from './Button.module.scss'

interface Props {
    text: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

function Button ({ text, type = "button", onClick }: Props) {
    return (
        <button className={style.btn} type={ type } onClick={ onClick }>
            { text }
        </button>
    )
}

export default Button;