import { Context } from "../../context";
import { Wheel } from "react-custom-roulette";
import React, { useContext, useEffect } from "react";
import SectionShooting from '../SectionShooting/SectionShooting';

import "./roulette.scss";

export default function Roulette() {
  const {
    mustSpin,
    setMustSpin,
    prizeNumber,
    setPrizeNumber,
    count,
    setCount,
    handleSpin,
    setHandleSpin,
  } = useContext(Context);

  const data = [{ option: 0, style: { backgroundColor: "#C4D0EE", textColor: "#30364A" } }];

  for (let i = 1; i < 37; i++) {
    if (i % 2 === 0) {
      data.push({ option: i, style: { backgroundColor: "#D2A283", textColor: "#30364A" } });
    } else {
      data.push({
        option: i,
        style: { backgroundColor: "#30364A", textColor: "#D2A283" },
      });
    }
  }

  useEffect(() => {
    if (handleSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }, [handleSpin]);

  const stopSpinning = () => {
    setHandleSpin(false);
    setMustSpin(false);
    setCount(15);
  };

  return (
    <div className="roulette">
      <div className="roulette-block">
        <div className="roulette-content">
          <div className="roulette-contentItems">
            <div className="roulette-gameWheel">
              <div className="roulette-info">
                <div className="roulette-infoTimer">
                  {handleSpin ? (
                    <p className="roulette-textScroll">Прокрутка колеса...</p>
                  ) : (
                    <div className="roulette-timer">
                      <p className="roulette-textTimer">Начало через:</p>
                      <p className="roulette-countTimer">{count}</p>
                    </div>
                  )}
                </div>
                <div className="roulette-checkBet">
                  <div className="roulette-userVirtualMoney">
                    <p className>Ваши F-монеты: 100F</p>
                  </div>
                  <div className="roulette-userBet">
                    <p>Ваша ставка: 10F</p>
                  </div>
                  <div className="roulette-rateMultiplier">
                    <p>Множитель: 2Х</p>
                  </div>
                  <div className="roulette-finishBet">
                    <p>Выпавшее число: 10</p>
                    <div className="roulette-colorBlock">
                      <p className="roulette-number">Цвет выпавшего числа: </p>
                      <div className="roulette-color"></div>
                    </div>
                  </div>
                </div>
              </div>
              <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                outerBorderColor={"#757B92"}
                outerBorderWidth={5}
                innerRadius={10}
                innerBorderColor={""}
                innerBorderWidth={5}
                radiusLineColor={"#30364A"}
                radiusLineWidth={0.1}
                perpendicularText={true}
                textDistance={85}
                fontSize={14}
                data={data}
                onStopSpinning={() => {
                  stopSpinning();
                }}
              />
              <div className="roulette-sectionShooting">
                <SectionShooting />
              </div>

              {/* <img
                src="./img/roulette-selector.svg"
                alt="selector"
                className="roulette-selector"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
