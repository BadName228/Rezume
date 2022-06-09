import "./../../CSS/Header.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <div style={{ display: "flex" }}>
          <div id="logotip">
            <img src="./img/logo.svg" />
          </div>
          <div id="menu">
            <NavLink to="/pogoda" activeClassName="fffooon">
              Погода
            </NavLink>
            <NavLink to="/worltime" activeClassName="fffooon">
              Мировое время
            </NavLink>
            <NavLink to="/games" activeClassName="fffooon">
              Приложения
            </NavLink>
            <NavLink to="/contacts" activeClassName="fffooon">
              Контакты
            </NavLink>
          </div>
          <img id="telef" src="./../img/telefon.svg" />
          <p id="telefon">+380969342878</p>
        </div>
        <div id="frontend">
          <p>FRONTEND - САМАЯ БЫСТРОРАСТУЩАЯ ОТРАСЛЬ IT</p>
          <div id="back_call"></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
