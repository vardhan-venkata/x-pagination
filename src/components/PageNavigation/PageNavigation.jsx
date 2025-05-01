import React from "react";
import "./PageNavigation.css";
const PageNavigation = ({
  currentPage,
  handlePrevButton,
  handleNextButton,
}) => {
  return (
    <div className="container">
      <button
        id="previousButton"
        onClick={handlePrevButton}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <div id="page">{currentPage}</div>
      <button
        id="nextButton"
        onClick={handleNextButton}
        disabled={currentPage === 5}
      >
        Next
      </button>
    </div>
  );
};

export default PageNavigation;
