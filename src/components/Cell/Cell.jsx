import React from "react";
import "./Cell.css";

const Cell = ({ value, canHighlight, onClick }) => {
  let cellClasses = "cell";
  let cellContentClasses = "cell-content";

  if (canHighlight) cellClasses += " winner";
  if (value) cellContentClasses += " populated";

  return (
    <button className={cellClasses} onClick={onClick}>
      <span className={cellContentClasses}>{value}</span>
    </button>
  );
};

export default Cell;
