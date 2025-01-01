import React from "react";
import { ArticleI } from "../../interface/articles";
import ArticleItem from "../article/ArticleItem";

const NewArticle = (props: { data: ArticleI[] }) => {
  return (
    <div className="font-zain px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {props.data.map((item, index) => (
          <ArticleItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default NewArticle;
