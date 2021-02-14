import React from 'react';
import style from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";



const Message = (props) => {

    return (
        <div>
        <div className={style.message}>
            {props.message}
        </div>

        </div>
    )
}


export default Message;