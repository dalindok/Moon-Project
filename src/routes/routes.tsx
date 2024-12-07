import React from "react";
import { Route, Routes } from "react-router-dom";
import Aboutus from "../pages/Aboutus";
import Article from "../pages/Article";
import EditProfile from "../pages/EditProfile";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import QuestionPage from "../pages/QuestionPage";
import SearchPage from "../pages/SearchPage";
import QuestionDetailPage from "../pages/QuestionDetailPage";
import ArticleList from "../pages/ArticleList";
import Ask from "../pages/Ask";

const RouteNavigation = () => {
  // const scrollRestoration = ScrollRestoration();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/article-detail/:id" element={<Article />} />
      <Route path="/about" element={<Aboutus />} />
      {/* <Route path="/questionPage" element={<QuestionPage />} /> */}
      {/* <Route path="/questionDetail" element={<QuestionDetailPage />} /> */}
      <Route path="/searchPage" element={<SearchPage />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/editProfile" element={<EditProfile />} /> */}
      {/* <Route path="/profile" element={<Profile />} /> */}
      <Route path="/articleList" element={<ArticleList />} />
      {/* <Route path="/ask" element={<Ask />} /> */}
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
};

export default RouteNavigation;
