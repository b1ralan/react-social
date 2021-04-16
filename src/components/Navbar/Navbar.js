import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from './Sidebar/Friends'

const Navbar = (props) => {

    // let friendsInfo = props.state.friends.map (friend => <Friends name={friend.name} avatar={friend.avatar}/>)
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs" activeClassName={style.active}>Massages</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/news" activeClassName={style.active}>News</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/music" activeClassName={style.active}>Music</NavLink>
      </div>
        <div className={style.item}>
            <NavLink to="/users" activeClassName={style.active}>Users</NavLink>
        </div>
      <div className={style.item}>
          <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
      </div>
        <div className={style.item}>
           <div className={style.friends}>Friends</div>
            {/*{{friendsInfo}}*/}
        </div>
    </nav>
  );
};

export default Navbar;
