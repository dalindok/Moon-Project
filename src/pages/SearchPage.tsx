import React, { useEffect, useState } from "react";
import { FaSearch, FaChevronLeft, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ArticleI } from "../interface/articles";
import ArticleItem from "../components/article/ArticleItem";
import Lottie from "lottie-react";
import No_data from "../assets/json/No_data.json";

const SearchPage = () => {
  const navigation = useNavigate();
  // use state to get data
  const [articles, setArticles] = useState<ArticleI[]>([]);
  // use to select the articles to display
  const [filteredArticles, setFilteredArticles] = useState<ArticleI[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);
  // use to search article
  const [searchQuery, setSearchQuery] = useState<string>("");

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
      setArticles(data.article);
      setFilteredArticles(data.article);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(query)
    );
    setFilteredArticles(filtered);
  };

  return (
    <div className="flex items-center flex-col p-4 mx-auto ">
      {/* Header with Back Button, Search Input, and Icons */}
      <div className="flex items-center justify-between mb-6 ">
        <button className="text-2xl font-semibold pr-10">
          <FaChevronLeft
            onClick={() => {
              navigation(-1);
            }}
            className="h-6 w-6 "
          />
        </button>

        <div className="relative">
          {/* Search input with icon */}
          <input
            value={searchQuery}
            autoFocus
            onChange={handleSearch}
            type="text"
            placeholder="Search"
            className="w-full bg-gray-100 rounded-full px-60 py-2 pl-10 outline-none"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <FaSearch className="h-5 w-5 text-gray-500" />
          </div>
        </div>

        <div className="flex text-2xl pl-10">
          <button className="flex">
            <FaTimes
              className="h-6 w-6 "
              onClick={() => {
                setSearchQuery("");
              }}
            />
          </button>
        </div>
      </div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {searchQuery.trim().length === 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {articles.slice(0, 3).map((item) => (
            <ArticleItem item={item} />
          ))}
        </div>
      ) : filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {filteredArticles.slice(0, 3).map((item) => (
            <ArticleItem item={item} />
          ))}
        </div>
      ) : (
        <Lottie animationData={No_data} loop={true} />
      )}
    </div>
  );
};

export default SearchPage;
