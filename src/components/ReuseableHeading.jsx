import React from "react";
import Welfare from "../assets/image/learn.png";

const ReuseableHeading = (props) => {
  return (
    <div className="heading_use">
      <h2 className="mb-5 dock">{props.heading}</h2>
      <p className="mb-3">{props.desc}</p>
      <img src={Welfare} alt="" />
      <small>{props.discount}</small>
    </div>
  );
};

export default ReuseableHeading;
