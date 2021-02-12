import React from "react";
import { Alert } from "reactstrap";
import styled from "styled-components";

const HrDiv = styled.hr`
  width: 70%;
  text-align: center;
  border: 5px solid blue;
  border-radius: 5px;
`;

const HOneDiv = styled.h1`
  text-align: center;
  color: blue;
  font-size: 3.5rem;
`;

const HOneTwoDiv = styled.h1`
  text-align: center;
  color: blue;
  font-size: 3.5rem;
`;

const HOneThreeDiv = styled.h1`
  text-align: center;
  color: blue;
  font-size: 3.5rem;
`;

const Headline = () => {
  return (
    <div className="wrapper">
      <HOneDiv>Photo Of The Day</HOneDiv>
      <HOneTwoDiv>By</HOneTwoDiv>
      <HOneThreeDiv>NASA</HOneThreeDiv>
      <HrDiv></HrDiv>
    </div>
  );
};

export default Headline;
