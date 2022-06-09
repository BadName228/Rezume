import "./../../CSS/Body.css";

function time() {
  let date = new Date();
  let res1 = date.getMonth() + 6;
  let res2 = date.getDate();
  let res3 = date.getHours();
  let res4 = date.getMinutes();
  return [res1, res2, res3, res4];
}
function AllTimeChange() {
  setTimeout(time, 1000);
} //функционал не допилен((

AllTimeChange();

function Body() {
  return (
    <div id="body">
      <div className="ramka">
        <div id="time">
          <p id="time_to_start">время со старта обучения:</p>
          <div className="circle_time">
            <p id="monts" className="ttt">
              {time()[0]}
            </p>
            <p className="ppp1">месяцев</p>
          </div>
          <div className="circle_time">
            <p id="days" className="ttt">
              {time()[1]}
            </p>
            <p className="ppp2">дней</p>
          </div>
          <div className="circle_time">
            <p id="hours" className="ttt">
              {time()[2]}
            </p>
            <p className="ppp3">часов</p>
          </div>
          <div className="circle_time">
            <p id="minutes" className="ttt">
              {time()[3]}
            </p>
            <p className="ppp4">минут</p>
          </div>
        </div>
        <div id="ROADMAP">
          <div id="roadmap">
            <p>Roadmap</p>
          </div>
          <div id="start">START</div>
          <div id="krug1"></div>
          <div id="html">
            <div style={{ display: "flex" }}>
              <div id="tr1"></div>
              <div>
                <div id="pole">HTML</div>
                <div id="html-text">
                  <p>{"<!DOCTYPE html>"}</p>
                  <p>HTML5</p>
                  <p>Head, Body</p>
                  <p>scripts, link</p>
                  <p>RegExp</p>
                </div>
              </div>
            </div>
          </div>
          <div id="line"></div>
          <div id="krug2"></div>
          <div id="css">
            <div style={{ display: "flex" }}>
              <div>
                <div id="pole">CSS3</div>
                <div id="html-text">
                  <p>styles</p>
                  <p>animation</p>
                  <p>@media-queries</p>
                  <p>CSS переменные</p>
                  <p>paralax</p>
                </div>
              </div>
              <div id="tr2"></div>
            </div>
          </div>
          <div id="krug3"></div>
          <div id="js">
            <div style={{ display: "flex" }}>
              <div id="tr1"></div>
              <div>
                <div id="pole">JavaScript</div>
                <div id="html-text">
                  <p>Типы данных</p>
                  <p>Область видимости, замыкания</p>
                  <p>ES6, ES7 syntax</p>
                  <p>if else</p>
                  <p>arrays, functions</p>
                  <p>{"( ) => { }"}</p>
                  <p>Promise</p>
                  <p>API (fetch, XMLHttpRequest)</p>
                  <p>Async avait</p>
                  <p>JSON</p>
                  <p>ООП</p>
                </div>
              </div>
            </div>
          </div>
          <div id="krug4"></div>
          <div id="Reactt">
            <div style={{ display: "flex" }}>
              <div>
                <div id="pole">React Redux</div>
                <div id="html-text">
                  <p>jsx syntax</p>
                  <p>CSS внутри React</p>
                  <p>Virtual DOM</p>
                  <p>props, state и их различие</p>
                  <p>Navlink</p>
                  <p>Роутинг: React Router</p>
                  <p>Жизненные циклы компонента</p>
                  <p>Hooks</p>
                  <p>HOC</p>
                  <p>Redux</p>
                  <p>reduser</p>
                </div>
              </div>
              <div id="tr2"></div>
            </div>
          </div>
          <div id="krug5"></div>
          <div id="something_technologies">
            <div style={{ display: "flex" }}>
              <div id="tr1"></div>
              <div>
                <div id="pole">Прочие изученные технологии</div>
                <div id="html-text">
                  <p>Git</p>
                  <p>Github</p>
                  <p>SCSS</p>
                  <p>TypeScript</p>
                  <p>Bootstrap</p>
                  <p>SOLID, KISS, DRY</p>
                  <p>WebSocket</p>
                  <p>И прочие в будущем</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
