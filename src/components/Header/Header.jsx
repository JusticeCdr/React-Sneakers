import React, { useState } from "react";
import "./style.css";
import Buy from "./Buy";

const Header = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
    {
      toggle && (
        <Buy toggle={toggle} setToggle={setToggle}/>
      )
    }

    <header className="body__container mr-top">
      <div className="container header__container">
        <div className="headerLeft">
          <img width={40} height={40} src="./img/logo.png" alt="" />
          <div className="headerInfo">
            <h2>React Sneakers</h2>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li onClick={() => setToggle(true)}> 
            <img width={18} height={18} src="./img/cart.svg" alt="" /> 1205 руб.
          </li>
          <li>
            <img width={18} height={18} src="./img/heart.svg" alt="" /> Закладки
          </li>
          <li >
            <img  width={18} height={18} src="./img/user.svg" alt="" /> Профиль
          </li>
        </ul>
      </div>
    </header>

    </>
  );
};

export default Header;
