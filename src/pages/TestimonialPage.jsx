import React from "react";
import Navbar from "../components/Navbar";
import UserLove from "../components/UserLove";
import Carousel from "../components/Carousel";
import styled from "styled-components";
import TestState from "../components/UseState";

const TestimonialPage = () => {
  return (
    <Dora>
      <UserLove />
      <Carousel />
      <TestState />
    </Dora>
  );
};

export default TestimonialPage;

let Dora = styled.section``;
