import React from "react";

const ReuseableHeading = (props) => {
  return (
    <div className="heading_use">
      <h2 className="mb-5 dock">{props.heading}</h2>
      <p className="mb-3">{props.desc}</p>


      <small>{props.discount}</small>
    </div>
  );
};

export default ReuseableHeading;
