import "./../../CSS/Footer.css";
// import { NavLink } from 'react-router-dom';

function Footer() {
  function years() {
    let date = new Date();
    return date.getFullYear();
  }

  return (
    <div id="footer_body">
      <div id="footer_menu">
        <div id="footer_logotip"></div>
        <div id="footer_sourse">
          <h2>Ссылки при обучении</h2>
          <a href="https://learn.javascript.ru/" target="blank">
            learn.javascript.ru
          </a>
          <br />
          <a href="https://www.figma.com/" target="blank">
            Figma.com
          </a>
          <br />
          <a href="http://htmlbook.ru//" target="blank">
            htmlbook.ru
          </a>
          <br />
          <a href="https://developer.mozilla.org/ru/" target="blank">
            developer.mozilla.org
          </a>
          <br />
          <a href="https://ru.reactjs.org/" target="blank">
            React.js
          </a>
          <br />
        </div>
        <div id="footer_contact">
          <h2>Контакты</h2>
          <img id="Ftel" />
          <a href="http://t.me/loffoten" target="blank">
            +38(096)-934-28-78
            <br />
            Telegram
          </a>
          <br />
          <img id="Ftel" />
          <a href="viber://add?number=380969342878" target="blank">
            +38(096)-934-28-78
            <br />
            Viber
          </a>
          <br />
          <img id="Ftel" />
          <a href="tel:+380969342878">+38(096)-934-28-78</a>
          <br />
          <img id="Ftel" />
          <a href="tel:+380668021975">+38(066)-802-19-75</a>
        </div>
        <div id="react">
          <h2>React</h2>
          <p style={{ color: "rgba(221, 235, 223, 1)" }}>
            Актуальная версия: 18.1.0
          </p>
          <div style={{ display: "inline-flex", marginTop: "50px" }}>
            <div id="inst-cntct">
              <a href="https://www.instagram.com/loffoten/"></a>
            </div>
            <div id="teleg-cntct">
              <a href="http://t.me/loffoten" target="blank"></a>
            </div>
            <div id="vider-cntct">
              <a href="viber://add?number=380969342878" target="blank"></a>
            </div>
          </div>
        </div>
      </div>
      <hr size="4" />
      <div id="footer_info">
        <div id="footer_prawa">
          ©Loffoten.com 2021-{years()} / Все права защищены.
        </div>
        <div style={{ color: "rgba(221, 235, 223, 1)", marginLeft: "200px" }}>
          Разработка и продвижие Front части сайта
        </div>
        <div id="footer_info_icons"></div>
      </div>
    </div>
  );
}
export default Footer;
