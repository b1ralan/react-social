import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogElements = props.state.dialogs
        .map(dialog => <DialogsItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)

    let messagesElements = props.state.messages
        .map(message => <Message message={message.message}/>)

    let newMessage = React.createRef();

    let addMessage = () => {
        debugger
        props.addMessage();
    }
    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageText} />
                    </div>
                    <div>
                        <button onClick={ addMessage }>Sent Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;