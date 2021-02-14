import style from './MyPosts.module.css';
import Posts from './Post/Posts';
import React from "react";
import {updateNewPostText} from "../../../redux/state";

const MyPosts = (props) => {
    let postsElements = props.posts.map ( post => <Posts message={post.message} likeCount={post.likeCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>

            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;