import React from "react";

import style from './Button.module.scss'

const Button = (props: {
    text: string,
    type?: "button" | "submit" | "reset" | undefined,
}) => (
    <button className={style.btn} type={ props.type }>
        { props.text }
    </button>
)

export default Button;