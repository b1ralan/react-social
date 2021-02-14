let rerenderEntireTree = () => {
    console.log('state')
}
let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: 5},
            {id: 2, message: 'It\'s my first post', likeCount: 12},
        ],
        newPostText: 'input text'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych', avatar:<img src="https://clck.ru/T3YT9"/>},
            {id: 2, name: 'Andrew', avatar:<img src="https://clck.ru/T3YJQ"/>},
            {id: 3, name: 'Sasha', avatar:<img src="https://clck.ru/T3YRZ"/>},
            {id: 4, name: 'Igor', avatar:<img src="https://clck.ru/T3YT9"/>},
            {id: 5, name: 'Vladislav', avatar:<img src="https://clck.ru/T3YJQ"/>}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra'},
            {id: 3, message: 'Yoooy'},
            {id: 4, message: 'Whats up man?'},
            {id: 5, message: 'Hello'}
        ],
        newMessageText: 'Hay'
    },
    sidebar:{
        friends:[
            {name: 'Dimych', avatar:<img src="https://clck.ru/T3YT9"/>},
            {name: 'Sasha', avatar:<img src="https://clck.ru/T3YRZ"/>},
            {name: 'Andrew', avatar:<img src="https://clck.ru/T3YJQ"/>}

        ]
    }
}

 export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
 }

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export  const addMessage = () => {

    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
rerenderEntireTree = observer; //наблюдатель
}

export default state;