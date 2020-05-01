import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Headline from "./components/Headline";
import Content from "./components/Content";

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
    <div className="App">
      <Headline />
      <Content someData={data} />
    </div>
  );
}

export default App;
