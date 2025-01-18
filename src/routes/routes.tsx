import React from "react";
import { Route, Routes } from "react-router-dom";
import Aboutus from "../pages/Aboutus";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import ArticleDetailPage from "../pages/ArticleDetailPage";
import QuestionPage from "../pages/QuestionPage";
import QuestionDetailPage from "../pages/QuestionDetailPage";
import Login from "../pages/Login";
import ArticleList from "../pages/ArticleList";
import Ask from "../pages/Ask";
import EditProfile from "../pages/EditProfile";
import Profile from "../pages/Profile";

const RouteNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/article-detail/:id" element={<ArticleDetailPage />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/questionPage" element={<QuestionPage />} />
      <Route path="/questionDetail" element={<QuestionDetailPage />} />
      <Route path="/searchPage" element={<SearchPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/editProfile" element={<EditProfile />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/articleList" element={<ArticleList />} />
      <Route path="/ask" element={<Ask />} />
    </Routes>
  );
};

export default RouteNavigation;
