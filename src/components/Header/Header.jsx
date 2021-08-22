import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context";

import './header.scss';

export default function Header() {
  const {navbarToggle, setNavbarToogle} = useContext(Context);
  return (
    <header>
      <div className="header-navigation">
        <div
          className={!navbarToggle ? "barBtn__open" : "barBtn__open change"}
          onClick={() => setNavbarToogle(!navbarToggle)}
        >
          <div className="bar-1"></div>
          <div className="bar-2"></div>
          <div className="bar-3"></div>
        </div>
        <Link to="/">
          <img
            width="194px"
            height="34px"
            src="./img/logo-casino.svg"
            alt="logo"
            className="header-logoCasino"
          />
        </Link>
      </div>
      <div className="header-separation"></div>
      <div className="header-authentification">
        <a className="header-registration pr-10" href="#">
          РЕГИСТРАЦИЯ
        </a>
        <a className="header-authorization" href="#">
          АВТОРИЗАЦИЯ
        </a>
        <div className="header-searchBlock">
          <img width="15px" height="15px" src="./img/search.svg" alt="search" />
          <input type="text" placeholder="Поиск..." />
        </div>
      </div>
    </header>
  );
}
