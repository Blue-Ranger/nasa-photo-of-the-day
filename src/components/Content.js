import React from "react";

const Content = (props) => {
  return (
    <div>
      <h2>{props.someData.title}</h2>
      <p>{props.someData.date}</p>
      <img src={props.someData.url} />
    </div>
  );
};

export default Content;
