import React, { useEffect, useRef, useContext } from "react";
import { Context } from "../../context";

export default function IntervalRoulette() {
  const { count, setCount, setHandleSpin } = useContext(Context);


  // useInterval(() => {
  //   if (count !== 0) {
  //     setCount(count - 1);
  //   }
  //   else if(count === 0) {
  //     setHandleSpin(true);
  //   }
  // }, 1000);

  // function useInterval(callback, delay) {
  //   const savedCallback = useRef();

  //   useEffect(() => {
  //     savedCallback.current = callback;
  //   }, [callback]);

  //   useEffect(() => {
  //     function tick() {
  //       savedCallback.current();
  //     }
  //     if (delay !== null) {
  //       let id = setInterval(tick, delay);
  //       return () => clearInterval(id);
  //     }
  //   }, [delay]);
  // }
  return <></>;
}
