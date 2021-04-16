import style from './Posts.module.css';
import userAvatar from '../../../../assets/images/avatar.jpg'

const Posts = (props) => {
  return (
    <div className={style.item}>
      <img src={userAvatar} alt="" />
      {props.message}
      <div>
        <span> like {props.likeCount} </span>
      </div>
    </div>
  );
};

export default Posts;
