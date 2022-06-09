import React from "react";
import { NavLink } from "react-router-dom";

import "./../CSS/Pogoda.css";

function AppPogoda(props) {
  var date = new Date();

  function showDay() {
    let days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    let day = date.getDay();
    return days[day];
  }
  function showMonts() {
    let monts = date.getMonth();
    let qwe = props.days[monts];
    return qwe;
  }
  const id = props.sities;

  function getWeather(id) {
    setTimeout(() => {
      var select = document.getElementById("select_");
      var value = select.value; //3
      console.log(value);
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?id=${
          id[value - 1]
        }&appid=e93de09fdf9ff86461dbc965fcaa475f`
      )
        .then(function (resp) {
          return resp.json();
        })
        .then(function (data) {
          document.getElementById("temp").innerHTML = Math.floor(
            data.main.temp - 273 - 2
          );
        })
        .catch(() => {});
    }, 100);
  }
  getWeather(id);
  return (
    <div id="pogoda_body">
      <div id="pogoda_menu">
        <div style={{ color: "black" }}>
          <NavLink to="/">На начальную страницу</NavLink>
        </div>
      </div>
      <div id="pogoda_map">
        <div id="map"></div>
        <div id="pogoda_sidebar">
          <div id="pogoda_info">
            <h2>Выберите вашу</h2>
            <h2> область</h2>
            <select id="select_">
              <option value="0">АР Крым</option>
              <option value="1">Винницкая область</option>
              <option value="2">Волынская область</option>
              <option value="3" selected>
                Днепропетровская область
              </option>
              <option value="4">Донецкая область</option>
              <option value="5">Житомирская область</option>
              <option value="6">Закарпатская область</option>
              <option value="7">Запорожская область</option>
              <option value="8">Ивано-Франковская область</option>
              <option value="9">Киевская область</option>
              <option value="10">Кировоградская область</option>
              <option value="11">Луганская область</option>
              <option value="12">Львовская область</option>
              <option value="13">Николаевская область</option>
              <option value="14">Одесская область</option>
              <option value="15">Полтавская область</option>
              <option value="16">Ровненская область</option>
              <option value="17">Сумская область</option>
              <option value="18">Тернопольская область</option>
              <option value="19">Харьковская область</option>
              <option value="20">Херсонская область</option>
              <option value="21">Хмельницкая область</option>
              <option value="22">Черкасская область</option>
              <option value="23">Черниговская область</option>
              <option value="24">Черновицкая область</option>
            </select>

            <div style={{ fontSize: "20px" }}>
              {showDay()}, {date.getDate()} {showMonts()} {date.getHours()}:
              {date.getMinutes()}
            </div>
            <div style={{ display: "inline-flex", marginTop: "8px" }}>
              <div id="temp">-66</div>
              <div id="oblaka"></div>
            </div>
            <div>
              <p id="feel">По ощущению</p>
              <p id="wind">Ветер</p>
              <p id="preassure">Давление</p>
              <p>Влажность</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppPogoda;
