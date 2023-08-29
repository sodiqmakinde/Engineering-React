import React, { useState } from "react";
import styled from "styled-components";

const TestState = () => {
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState("blue");

  function IncreateNumber() {
    setNumber(number + 1);
    setColor("blue red");
  }

  const DecreaseNumber = () => {
    setNumber(number - 1);
  };

  const Reset = () => {
    setNumber(0);
  };

  return (
    <Diversity>
      <h2 className={color} >This is a State Management Demo</h2>
      <button onClick={DecreaseNumber}>-</button>
      Calculate : <span> {number}</span>
      <button onClick={IncreateNumber}>+</button>
      <button onClick={Reset}>Reset</button>
    </Diversity>
  );
};

export default TestState;

let Diversity = styled.section`
  margin-top: 100px;
  //   background: linear-gradient(to right, red, blue);
  button {
    width: 40px;
    height: 40px;
    margin: 0 20px;
    font-size: 20px;
  }
  h2 {
    text-align: center;
  }
  .red{
    color: red;
  }

  .blue{
    color: blue;
  }
`;
