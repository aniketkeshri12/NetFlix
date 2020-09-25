import React from "react";
import "./styles.css";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="img" className="card_img" />
          <div className="card_info">
            <span className="card_cate">{props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
            <a href={props.link} target="blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
