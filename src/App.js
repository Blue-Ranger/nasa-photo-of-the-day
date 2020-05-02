import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Headline from "./components/Headline";
import Content from "./components/Content";
import styled from "styled-components";

const WrapperDiv = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: black;
  color: white;
  font-family: "Abril Fatface", cursive;
`;

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((Response) => {
        console.log(Response);
        setData(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <WrapperDiv>
      <Headline />
      <Content someData={data} />
    </WrapperDiv>
  );
}

export default App;
