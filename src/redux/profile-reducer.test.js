import profileReducer, {addPost, deletePost} from "./profile-reducer";


let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 5},
        {id: 2, message: 'It\'s my first post', likeCount: 12},
    ],
    profile: null,
    status: ''
};

test('length of post should be incremented', () => {
    let action = addPost('chiki-briki')
    let newState = profileReducer(state,action);

    expect( newState.posts.length).toBe(3)

});

test('message of new post should be correct', () => {
    let action = addPost('chiki-briki')
    let newState = profileReducer(state,action);

    expect( newState.posts[2].message).toBe('chiki-briki')

});

test('after deleting length of message should be decrement', () => {
    // 1. test data
    let action = deletePost(1)

    // 2. action
    let newState = profileReducer(state,action);

    // 3. expectation
    expect( newState.posts.length).toBe(1)

});

test(`after deleting length shouldn't be decrement if id is incorrect `,() => {
    // 1. test data
    let action = deletePost(1000)

    // 2. action
    let newState = profileReducer(state,action);

    // 3. expectation
    expect( newState.posts.length).toBe(2)

});