import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import shuriken from "../../assets/images/shuriken-2.3s-126px.svg"

const Header = (props) => {
  return (
    <header className={style.header}>
      <img src="https://i.pinimg.com/originals/e7/eb/b9/e7ebb9c19633adddc0f06a7869f9c35b.png" />
      {/*<img src={shuriken} />*/}

      <div className={style.loginBlock}>

          {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> :
              <NavLink to={'/login'}>Login</NavLink>
          }
      </div>
    </header>
  );
};

export default Header;
