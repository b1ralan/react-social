import style from '../Navbar.module.css';

const Friends = (props) => {
  return (
    <div className={style.item}>
        {props.name}{props.avatar}
    </div>
  );
};

export default Friends;
