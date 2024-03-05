import React, { useState } from "react";
import CategoriesPage from "./components/categoriesPage/CategoriesPage";
import QuestionPage from "./components/questionPage/QuestionPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("categories");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage("questions");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app">
      {currentPage === "categories" && (
        <CategoriesPage handleCategoryClick={handleCategoryClick} />
      )}
      {currentPage === "questions" && (
        <QuestionPage
          selectedCategory={selectedCategory}
          changePage={handlePageChange}
        />
      )}
    </div>
  );
};

export default App;
