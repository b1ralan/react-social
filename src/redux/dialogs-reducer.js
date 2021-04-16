const ADD_MESSAGE = 'ADD-MESSAGE';

const  initialState = {
    dialogs: [
        {id: 1, name: 'Dimych', avatar:<img src="https://clck.ru/T3YT9" alt=""/>},
        {id: 2, name: 'Andrew', avatar:<img src="https://clck.ru/T3YJQ" alt=""/>},
        {id: 3, name: 'Sasha', avatar:<img src="https://clck.ru/T3YRZ" alt=""/>},
        {id: 4, name: 'Igor', avatar:<img src="https://clck.ru/T3YT9" alt=""/>},
        {id: 5, name: 'Vladislav', avatar:<img src="https://clck.ru/T3YJQ" alt=""/>}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yoooy'},
        {id: 4, message: 'Whats up man?'},
        {id: 5, message: 'Hello'}
    ]
}


const dialogsReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let text = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: text}]
            }
        default:
            return state;

    }

}
export const addMessage = (newMessageText) => ({type: ADD_MESSAGE, newMessageText})

export default dialogsReducer;