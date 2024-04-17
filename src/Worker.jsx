import React from "react";
import { shortList } from "./data";
import { FaQuoteRight } from "react-icons/fa";

const Worker = ({ translate, person }) => {
  const { id, image, name, title, quote } = person;
  return (
    <div className="slide" style={{ transform: `translateX(${translate}%)` }}>
      <img src={image} alt={name} className="person-img" />
      <h1 className="name">{name}</h1>
      <h4 className="title">{title}</h4>
      <p className="text">{quote}</p>
      <span className="icon">
        <FaQuoteRight />
      </span>
    </div>
  );
};

export default Worker;
