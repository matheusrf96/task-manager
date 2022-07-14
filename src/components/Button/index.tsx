import React from "react";

import style from './Button.module.scss'

const Button = (props: {text: string}) => (
    <button className={style.btn}>
        { props.text}
    </button>
)

export default Button;