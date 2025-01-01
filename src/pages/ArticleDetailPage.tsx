import React, { useEffect, useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleI } from "../interface/articles";
import ArticleDetail from "../components/article/ArticleDetail";
import Lottie from "lottie-react";
import No_data from "../assets/json/No_data.json";

const ArticleDetailPage = () => {
  const navigation = useNavigate();
  const handleGoBack = () => {
    navigation(-1);
  };

  const param = useParams();
  const [articleDetail, setArticleDetail] = useState<ArticleI | null>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/dalindok/Moon-Project/refs/heads/development/src/temp/Article.json"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      // data.article;
      const detail = data.article.find((item: any) => item.id == param.id);
      if (detail != null) {
        setArticleDetail(detail);
      } else {
        setArticleDetail(null);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
        {articleDetail != null ? (
          <ArticleDetail
            date={articleDetail.date}
            img={articleDetail.img}
            title={articleDetail.title}
            description={articleDetail.description}
          />
        ) : (
          <Lottie animationData={No_data} loop={true} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ArticleDetailPage;
