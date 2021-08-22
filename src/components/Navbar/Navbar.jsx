import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { Context } from "../../context";
import "./navbar.scss";

export default function Navbar() {
  const {
    setNavbarToogle,
    setLeaderBoardToggle,
    setCasinoToggle,
    navbarToggle,
    casinoToggle,
    leaderBoardToggle,
  } = useContext(Context);

  return (
    <>
      <CSSTransition
        in={navbarToggle}
        timeout={550}
        classNames={{
          enterActive: "navbar__active",
          exitActive: "navbar__hide",
        }}
        mountOnEnter
        unmountOnExit
      >
        <div className="navbar">
          <div className="nabvar-content">
            <div
              className="navbar-btn__close"
              onClick={() => setNavbarToogle(!navbarToggle)}
              style={navbarToggle ? { opacity: "1" } : { opacity: "0" }}
            >
              <div className="navbar-1"></div>
              <div className="navbar-2"></div>
            </div>
            <div className="divider"></div>
            <div className="navbar-casinoGame">
              <div
                className="navbar-text"
                onClick={() => setCasinoToggle(!casinoToggle)}
              >
                <img
                  src="./img/navbar-diceImg.svg"
                  alt="Dice"
                  className="navbar-diceImg"
                />
                <h3>КАЗИНО</h3>
                <img
                  src="./img/navbar-listImg.svg"
                  alt=""
                  className={
                    !casinoToggle
                      ? "navbar-casinoListImg"
                      : "navbar-casinoListImg change"
                  }
                />
              </div>
              <div className="navbar-dropListContainer">
                <CSSTransition
                  in={casinoToggle}
                  timeout={350}
                  classNames={{
                    enterActive: "navbar-casinoDropList__activeDrop",
                    enterDone: "navbar-casinoDropList__enterDrop",
                    exitActive: "navbar-casinoDropList__hideDrop",
                  }}
                  mountOnEnter
                  unmountOnExit
                >
                  <ul className="navbar-casinoDropList">
                    <Link to="/roulette">
                      <li>ROULETTE FUN GAME</li>
                    </Link>
                    <li>ВТОРАЯ ИГРА</li>
                    <li>ТРЕТЬЯ ИГРА</li>
                  </ul>
                </CSSTransition>
              </div>
            </div>
            <div className="divider"></div>
            <div className="navbar-leaderboard">
              <div
                className="navbar-text"
                onClick={() => setLeaderBoardToggle(!leaderBoardToggle)}
              >
                <img
                  src="./img/navbar-leaderboardImg.svg"
                  alt="leaderboard"
                  className="navbar-leaderboardImg"
                />
                <h3>ДОСКА ЛИДЕРОВ</h3>
                <img
                  src="./img/navbar-listImg.svg"
                  alt=""
                  className={
                    !leaderBoardToggle
                      ? "navbar-leaderBoardListImg"
                      : "navbar-leaderBoardListImg change"
                  }
                />
              </div>
              <div className="navbar-dropListContainer">
                <CSSTransition
                  in={leaderBoardToggle}
                  timeout={350}
                  classNames={{
                    enterActive: "navbar-leaderBoardDropList__activeDrop",
                    enterDone: "navbar-leaderBoardDropList__enterDrop",
                    exitActive: "navbar-leaderBoardDropList__hideDrop",
                  }}
                  mountOnEnter
                  unmountOnExit
                >
                  <ul className="navbar-leaderBoardDropList">
                    <li>ВСЁ ВРЕМЯ</li>
                    <li>НЕДАВНО</li>
                  </ul>
                </CSSTransition>
              </div>
            </div>
            <div className="divider"></div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
