import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import IntervalRoulette from "./components/IntervalRoulette/IntervalRoulette";
import Navbar from "./components/Navbar/Navbar";
import Roulette from "./components/Roulette/Roulette";
import Slider from "./components/Slider/Slider";
import { Context } from "./context";

function App() {
  const [chatToggle, setChatToggle] = useState(false);

  const [navbarToggle, setNavbarToogle] = useState(false);
  const [casinoToggle, setCasinoToggle] = useState(false);
  const [leaderBoardToggle, setLeaderBoardToggle] = useState(false);

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [count, setCount] = useState(15);

  const [handleSpin, setHandleSpin] = useState(false);

  const [sliderItems, setSliderItems] = useState([
    {
      id: "1",
      src: "./img/slider-imgTest_0.png",
      sliderClass: "slider-imgPrev",
    },
    {
      id: "2",
      src: "./img/slider-imgTest_1.png",
      sliderClass: "slider-img",
    },
    {
      id: "3",
      src: "./img/slider-imgTest_2.png",
      sliderClass: "slider-imgNext",
    },
    {
      id: "4",
      src: "./img/slider-imgTest_3.png",
      sliderClass: "slider-imgNext",
    },
    {
      id: "5",
      src: "./img/slider-imgTest_4.png",
      sliderClass: "slider-imgNext",
    },
  ]);

  useEffect(() => {
    if (!navbarToggle) {
      setCasinoToggle(false);
      setLeaderBoardToggle(false);
    }
  }, [navbarToggle]);

  return (
    <>
      <Context.Provider
        value={{
          chatToggle,
          setChatToggle,
          casinoToggle,
          navbarToggle,
          setNavbarToogle,
          setCasinoToggle,
          leaderBoardToggle,
          setLeaderBoardToggle,
          mustSpin,
          setMustSpin,
          prizeNumber,
          setPrizeNumber,
          count,
          setCount,
          handleSpin,
          setHandleSpin,
          sliderItems,
          setSliderItems,
        }}
      >
        <div className="wrapper clear">
          <Header />
          <Switch>
            <Route exact path="/">
              <Slider />
              <Content />
              <img className="blob-1" src="./img/blob-1.svg" alt="blob1" />
              <img className="blob-2" src="./img/blob-2.svg" alt="blob2" />
            </Route>
            <Route path="/roulette">
              <Roulette />
            </Route>
          </Switch>
          <Footer />
          <div className="chat-logoImg">
            <img
              src="./img/chat-logoImg.svg"
              alt="chat"
              className="logoImg"
              onClick={() => setChatToggle(!chatToggle)}
            />
          </div>
        </div>
        <Chat />
        <IntervalRoulette />
        <Navbar />
      </Context.Provider>
    </>
  );
}

export default App;
