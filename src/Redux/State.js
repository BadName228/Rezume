const State = {
  days: [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ],
  pogoda: {
    sities: [
      693805, 689558, 702569, 709930, 709717, 686967, 690548, 687700, 707470,
      703448, 705812, 702658, 702550, 700569, 698740, 696643, 695594, 692194,
      691650, 706483, 706448, 706369, 710791, 710735, 710741,
    ],
  },
  api() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?id=${706448}&appid=e93de09fdf9ff86461dbc965fcaa475f`
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        document.querySelector(".temp").firstChild.data = Math.floor(
          data.main.temp - 273
        );
        console.log(data.name);
      })
      .catch(() => {});
  },
};

export default State;
// var result = [];
//         var result = result.push(Math.floor(data.main.temp - 273));
//         var result = result.push(Math.floor(data.main.feels_like - 273));
//         var result = result.push(data.wind.speed);
//         var result = result.push(data.wind.deg);
//         var result = result.push(data.main / 1.333);
//         var result = result.push(data.main.humidity);
//         return result;
