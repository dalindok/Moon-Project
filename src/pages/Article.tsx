import React from "react";
import ArticlePart from "../components/article/ArticlePart";
import { GoChevronLeft } from "react-icons/go";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Article() {
  const navigation = useNavigate();
  const handleGoBack = () => {
    navigation(-1);
  };
  return (
    <div>
      <Nav />
      <div className="font-zain bg-white min-h-screen px-4 pt-5 md:px-8 lg:px-16">
        <button
          onClick={handleGoBack}
          className="flex items-center mb-4 mt-4 md:mt-1 lg:mt-1"
        >
          <GoChevronLeft className="text-4xl mr-2 mt-8" />
        </button>
        <ArticlePart />
      </div>
      <Footer />
    </div>
  );
}

export default Article;
