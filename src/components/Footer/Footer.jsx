import React from "react";

import './footer.scss';

export default function Footer() {
  return (
    <footer>
      <div className="footer-blockInfo">
        <div className="footer-copyright">
          <img
            width="194px"
            height="34px"
            src="./img/logo-casino.svg"
            alt="logo"
            className="footer-logoCasino"
          />
          <p>
            Copyright © 2021 fcasino.com. All rights reserved. FCasino is a
            brand name of AE Company Address: Ukraine, Luhansk <br />
            <br /> AE payments can be processed by WINGAMING SUPPORT LIMITED
            (Registration Number 11111111). Company Address: Avlonos, 1, MARIA
            HOUSE, 1075, Nicosia, Cyprus <br />
            <br /> Crypto trading is not gambling, and therefore not covered by
            our gaming license
          </p>
        </div>
        <div className="footer-social">
          <div className="footer-platforms">
            <h3>ПЛАТФОРМЫ</h3>
            <p>Помощь</p>
            <p>FAQ</p>
          </div>
          <div className="footer-aboutUs">
            <h3>О НАС</h3>
            <p>Политика конфиденциальности</p>
            <p>Условия и положения</p>
          </div>
          <div className="footer-community">
            <h3>СООБЩЕСТВО</h3>
            <p>Discord</p>
            <p>Вконтакте</p>
          </div>
        </div>
      </div>
      <img className="footer-img" src="./img/footer-img.png" alt="" />
    </footer>
  );
}
