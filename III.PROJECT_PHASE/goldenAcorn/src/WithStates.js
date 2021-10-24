import Btn from "./Btn";
import Display from "./Display";
import React, { useState, useEffect } from "react";

const WithStates = () => {
  const [number, setNumber] = useState(0);

  const add = () => {
    setNumber(number + 1);
  };

  const substract = () => {
    number > 0 && setNumber(number - 1);
  };

  const up = (event) => event.key === "ArrowUp" && add();
  const down = (event) => event.key === "ArrowDown" && substract();

  useEffect(() => {
    window.addEventListener("keydown", up);
    window.addEventListener("keydown", down);
    return () => {
      window.removeEventListener("keydown", up);
      window.removeEventListener("keydown", down);
    };
  }, []);

  return (
    <div className="golden-app">
      <h2>Golden Acorn application with states</h2>
      <Btn fun={add} str="Buy one" />
      <Display>{number}</Display>
      <Btn fun={substract} str="Eat one" />
    </div>
  );
};

export default WithStates;
