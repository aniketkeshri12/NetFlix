import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card.jsx";
import "./styles.css";
import data from "./Sdata.jsx";

ReactDOM.render(
  <>
    <h1 className="heading_style">The Best 6 Shows of Netflix</h1>
    <Card
      imgsrc={data[0].imgsrc}
      title={data[0].title}
      sname={data[0].sname}
      link={data[0].link}
    />

    <Card
      imgsrc={data[1].imgsrc}
      title={data[1].title}
      sname={data[1].sname}
      link={data[1].link}
    />

    <Card
      imgsrc={data[2].imgsrc}
      title={data[2].title}
      sname={data[2].sname}
      link={data[2].link}
    />

    <Card
      imgsrc={data[3].imgsrc}
      title={data[3].title}
      sname={data[3].sname}
      link={data[3].link}
    />
    <Card
      imgsrc={data[4].imgsrc}
      title={data[4].title}
      sname={data[4].sname}
      link={data[4].link}
    />
    <Card
      imgsrc={data[5].imgsrc}
      title={data[5].title}
      sname={data[5].sname}
      link={data[5].link}
    />
  </>,
  document.getElementById("root")
);
