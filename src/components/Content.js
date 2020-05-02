import React from "react";
import { Alert } from "reactstrap";
import styled from "styled-components";

// const HTwoDiv = styled.h2`
//   text-align: center;
//   color: blue;
//   font-size: 3.5rem;
// `;

// const PDiv = styled.p`
//   text-align: center;
//   color: blue;
//   font-size: 3.5rem;
// `;

// const ImgDiv = styled.img`
//   text-align: center;
//   color: blue;
//   font-size: 3.5rem;
// `;

// const PTwoDiv = styled.p`
//   text-align: center;
//   color: blue;
// `;

const Content = (props) => {
  return (
    <div>
      <h2>{props.someData.title}</h2>
      <p>{props.someData.date}</p>
      <img src={props.someData.url} />
      <p>{props.someData.explanation}</p>
    </div>
  );
};

export default Content;
