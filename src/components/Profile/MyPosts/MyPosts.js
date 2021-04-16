import style from './MyPosts.module.css';
import Posts from './Post/Posts';
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validation/valodators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo((props) => {
    let postsElements = props.posts.map(post => <Posts key={post.id} message={post.message} likeCount={post.likeCount}/>)




    let addMessagePost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <UserPostReduxForm onSubmit={addMessagePost}/>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
});

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength10]} placeholder={'Post message'} name='newPostText'/>
            </div>
            <div>
                <button>Add post</button>
            </div>

        </form>
    )
}

const UserPostReduxForm = reduxForm({form: 'ProfileAddPostForm'})(AddPostForm)

export default MyPosts;
