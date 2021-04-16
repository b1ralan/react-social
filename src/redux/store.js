import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 5},
                {id: 2, message: 'It\'s my first post', likeCount: 12},
            ],
            newPostText: 'input text'
        },
        dialogsPage: {
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
            ],
            newMessageText: ''
        },
        sidebar:{
            friends:[
                {name: 'Dimych', avatar:<img src="https://clck.ru/T3YT9" alt=""/>},
                {name: 'Sasha', avatar:<img src="https://clck.ru/T3YRZ" alt=""/>},
                {name: 'Andrew', avatar:<img src="https://clck.ru/T3YJQ" alt=""/>}

            ]
        }
    },
    _callSubscriber() {
        console.log('state')
    },

    getState (){
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer; //наблюдатель
    },


    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);


        this._callSubscriber(this._state);

    }

}

export default store;