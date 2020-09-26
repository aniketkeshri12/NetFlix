import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card.jsx";
import "./styles.css";
import data from "./Sdata.jsx";

ReactDOM.render(
  <>
    <h1 className="heading_style">The Best 6 Shows of Netflix</h1>
    {data.map((val) => {
      return (
        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}
    ;
  </>,

  document.getElementById("root")
);
