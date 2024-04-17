import React, { useState } from "react";
import Worker from "./Worker";
import { longList } from "./data";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
const Workers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [peopleList, setpeopleList] = useState(longList);
  function next() {
    setCurrentIndex((prev) => {
      if (currentIndex === peopleList.length - 1) return 0;
      return prev + 1;
    });
  }

  function prev() {
    setCurrentIndex((prev) => {
      if (currentIndex === 0) return peopleList.length - 1;
      return prev - 1;
    });
  }
  return (
    <div className="slider-container">
      {peopleList.map((item) => {
        return (
          <Worker translate={-100 * currentIndex} key={item.id} person={item} />
        );
      })}
      <div>
        <button
          className="prev"
          onClick={() => {
            prev();
          }}
        >
          <MdArrowBackIos />
        </button>
        <button
          className="next"
          onClick={() => {
            next();
          }}
        >
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default Workers;
