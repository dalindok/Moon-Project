import React from "react";
import ArticlePart from "../components/article/ArticlePart";
import { GoChevronLeft } from "react-icons/go";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import articleData from "../temp/Article";

const Article = () => {
  const navigation = useNavigate();
  const handleGoBack = () => {
    navigation(-1);
  };
  const param = useParams();
  const id = param.id;
  const detail = articleData.find((item) => item.id == Number(id));
  console.log(detail);
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
        {detail != null && (
          <ArticlePart
            date={detail.date}
            img={detail.img}
            title={detail.title}
            shortdescription={detail.shortdescription}
            description={detail.description}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Article;
