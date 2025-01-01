import React from "react";
import { useNavigate } from "react-router-dom";
import { ArticleI } from "../../interface/articles";
import LinesEllipsis from "react-lines-ellipsis";

const ArticleItem = (props: { item: ArticleI }) => {
  const navigation = useNavigate();
  const onNavigateArticleDetail = (id: number) => {
    navigation(`/article-detail/${id}`);
  };
  return (
    <div
      data-aos="fade-up"
      onClick={() => {
        onNavigateArticleDetail(props.item.id);
      }}
      key={props.item.id}
      className="shadow-xl hover:shadow-slate-400 flex flex-col w-full h-[350px] m-auto rounded-lg"
    >
      <img
        src={props.item.img}
        alt="header of the letter"
        className="w-full h-[200px] object-cover rounded-t-lg"
      />
      <div className="p-4">
        <p className="text-start text-gray-500 text-sm mb-2">
          {props.item.date}
        </p>
        <div className="text-xl md:text-xl text-start font-bold">
          {/* <p>{props.item.title}</p> */}
          <LinesEllipsis text={props.item.title} maxLine="1" />
        </div>
        <div className="text-xl text-start mt-2 text-slate-700">
          {/* <p>{props.item.shortdescription}</p> */}
          <LinesEllipsis text={props.item.shortdescription} maxLine="2" />
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
