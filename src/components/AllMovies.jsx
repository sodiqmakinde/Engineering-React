import React from "react";
import EachMovie from "./EachMovie";
import styled from "styled-components";
import cinema from "../assets/json/dummyData";

const AllMovies = () => {
  return (
    <Danas>
      Hello
      {/* {cinema.map((eachmovies) => (
        <EachMovie
          img={eachmovies.img}
          match={eachmovies.match}
          rated={eachmovies.rated}
          seasons={eachmovies.seasons}
          resolution={eachmovies.resolution}
          items={eachmovies?.genre}
        />
      ))} */}
    </Danas>
  );
};

export default AllMovies;

let Danas = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .eachMovies {
    width: 30%;
  }
`;
