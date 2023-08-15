import React from "react";
import styled from "styled-components";

const EachMovie = (props) => {
  return (
    <Movies className="eachMovies">
      <img src={props.img} alt="" />

      <div className="description">
        <div>
          <span>P</span>
          <span>P</span>
          <span>P</span>
        </div>

        <div className="text">
          <h4>{props.match}% Match</h4>
          <small>{props.rated}+</small>
          <h5>{props.seasons} seasons</h5>
          <span>{props.resolution}</span>
        </div>
      </div>
    </Movies>
  );
};

export default EachMovie;

let Movies = styled.div`
//   width: 30%;
  img {
    width: 100%;
  }
  .description {
    .text {
      display: flex;
      h4 {
        color: var(--gColor);
      }
      small {
        border: 1px solid #ccc;
        margin: 0 10px;
        padding: 0 5px;
      }
    }
  }
`;
