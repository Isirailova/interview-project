import React from "react";
import "./categoriesPage.style.scss";

const CategoriesPage = ({ handleCategoryClick }) => {
  return (
    <div className="container">
      <h1>Select a category</h1>
      <div className="boxes">
        <div className="box" onClick={() => handleCategoryClick("CSS")}>
          <span></span>
          <div className="content">
            <h2>CSS</h2>
          </div>
        </div>
        <div className="box" onClick={() => handleCategoryClick("HTML")}>
          <span></span>
          <div className="content">
            <h2>HTML</h2>
          </div>
        </div>
        <div className="box" onClick={() => handleCategoryClick("JavaScript")}>
          <span></span>
          <div className="content">
            <h2>JavaScript</h2>
          </div>
        </div>
        <div className="box" onClick={() => handleCategoryClick("React")}>
          <span></span>
          <div className="content">
            <h2>React</h2>
          </div>
        </div>
        <div className="box" onClick={() => handleCategoryClick("Geography")}>
          <span></span>
          <div className="content">
            <h2>Geography</h2>
          </div>
        </div>
        <div className="box" onClick={() => handleCategoryClick("English")}>
          <span></span>
          <div className="content">
            <h2>English</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
