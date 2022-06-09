import React from "react";
import "./../CSS/Apps.css";
import { NavLink } from "react-router-dom";

function Apps() {
  return (
    <>
      <div className="mainfield">
        <NavLink to="/">На главную страницу</NavLink>
        <br />
        <br />
        <p>Перед использованием нужна загрузка и уставнока</p>
        <br />
        <a href="https://github.com/BadName228/Fmanager" target="_blank">
          Файловый менеджер
        </a>
        <br />
        <a href="https://github.com/BadName228/Rezume" target="_blank">
          Cамо резюме (загруженое на GitHub)
        </a>
        <br />
        <a href="https://github.com/BadName228/BP24">
          Приложение Приват Банка(находиться в разработке)
        </a>
      </div>
    </>
  );
}

export default Apps;
