import React, { useEffect, useState } from "react";
import CoreValue from "../components/home/CoreValue";
import NewActicle from "../components/home/NewActicle";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/question/Hero";
import Search from "../components/question/Search";
import { ArticleI } from "../interface/articles";

function Homepage() {
  const [articles, setArticles] = useState<ArticleI[]>([]);
  // state that use to get of articles to home page
  const [loading, setLoading] = useState<boolean>(true);
  // state that use to get loading
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  // use effect run firstly when start in homepage

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/dalindok/Moon-Project/refs/heads/development/src/temp/Article.json"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // console.log("what response do?", response);
      const data = await response.json();
      // response.json() to get the whole json data
      // in order to get data as array instead of whole json data we must access(.) it with article
      setArticles(data.article);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  // fetch api (get data from api)

  return (
    <div>
      <Nav />
      <Hero />
      <CoreValue />
      <Search />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {articles.length > 0 && <NewActicle data={articles} />}
      {/* .length check if article empty or not */}
      {/* there is props data in NewAricle*/}
      <Footer />
    </div>
  );
}

export default Homepage;
