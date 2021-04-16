import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validation/valodators";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogs
        .map(dialog => <DialogsItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)

    let messagesElements = state.messages
        .map(message => <Message message={message.message}/>)


    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div>
                    <DialogsReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

const maxLength15 = maxLengthCreator(15);

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength15]}
                       name={'newMessageBody'}
                       placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>Sent Message</button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm)

export default Dialogs;