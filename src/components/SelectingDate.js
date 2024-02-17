import React from "react";
import "./SelectingDate.scss";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const SelectingDate = ({ setSelectedDate, selectedDate, yesterday }) => {
  const onIncreaseDate = () => {
    setSelectedDate(parseInt(selectedDate) + 1);
  };

  const onDecreaseDate = () => {
    setSelectedDate(parseInt(selectedDate) - 1);
  };

  return (
    <div className="selected-date">
      <div className="arrow-icon">
        <FaArrowLeft onClick={onDecreaseDate} />
      </div>
      <h3>
        {selectedDate.toString().slice(0, 4) +
          "-" +
          selectedDate.toString().slice(4, 6) +
          "-" +
          selectedDate.toString().slice(6)}
      </h3>
      <div className="arrow-icon">
        {parseInt(yesterday) === parseInt(selectedDate) ? (
          <div></div>
        ) : (
          <FaArrowRight onClick={onIncreaseDate} />
        )}
      </div>
    </div>
  );
};

export default SelectingDate;
