import React, {useState, useEffect} from "react";
import {Switch, Route} from "react-router-dom";
import Chat from "./components/Chat/Chat";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import IntervalRoulette from "./components/IntervalRoulette/IntervalRoulette";
import Navbar from "./components/Navbar/Navbar";
import Roulette from "./components/Roulette/Roulette";
import Slider from "./components/SliderCasino/SliderCasino";
import {Context} from "./context";

function App() {
    const [chatToggle, setChatToggle] = useState(false);

    const [navbarToggle, setNavbarToogle] = useState(false);
    const [casinoToggle, setCasinoToggle] = useState(false);
    const [leaderBoardToggle, setLeaderBoardToggle] = useState(false);

    const [slidesToShow, setSlidesToShow] = useState(3)

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [count, setCount] = useState(15);

    const [handleSpin, setHandleSpin] = useState(false);

    const [slideIndex, setSlideIndex] = useState(1);
    const [sliderItems, setSliderItems] = useState([
        {
            id: "0",
            sliderClass: "slider-img",
            sliderSrc: 0,
        },
        {
            id: "1",
            sliderClass: "slider-img",
            sliderSrc: 1,
        },
        {
            id: "2",
            sliderClass: "slider-img",
            sliderSrc: 2,
        },
        {
            id: "3",
            sliderClass: "slider-img",
            sliderSrc: 3,
        },
        {
            id: "4",
            sliderClass: "slider-img",
            sliderSrc: 4,
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
                    slideIndex,
                    setSlideIndex,
                    slidesToShow,
                    setSlidesToShow
                }}
            >
                <div className="wrapper clear">
                    <Header/>
                    <Switch>
                        <Route exact path="/">
                            <Slider/>
                            <Content/>
                            <img className="blob-1" src="./img/blob-1.svg" alt="blob1"/>
                            <img className="blob-2" src="./img/blob-2.svg" alt="blob2"/>
                        </Route>
                        <Route path="/roulette">
                            <Roulette/>
                        </Route>
                    </Switch>
                    <Footer/>
                    <div className="chat-logoImg">
                        <img
                            src="./img/chat-logoImg.svg"
                            alt="chat"
                            className="logoImg"
                            onClick={() => setChatToggle(!chatToggle)}
                        />
                    </div>
                </div>
                <Chat/>
                <IntervalRoulette/>
                <Navbar/>
            </Context.Provider>
        </>
    );
}

export default App;
