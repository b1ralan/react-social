import style from './Posts.module.css';

const Posts = (props) => {
  return (
    <div className={style.item}>
      <img src="https://clck.ru/SiZXS" />
      {props.message}
      <div>
        <span> like {props.likeCount} </span>
      </div>
    </div>
  );
};

export default Posts;
