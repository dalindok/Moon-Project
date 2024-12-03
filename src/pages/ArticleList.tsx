import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import NewArticle from "../components/home/NewActicle";

const ArticleList = () => {
  return (
    <div>
      <Nav />
      <div className="m-10">
        <NewArticle />
        <NewArticle />
      </div>
      <Footer />
    </div>
  );
};

export default ArticleList;
