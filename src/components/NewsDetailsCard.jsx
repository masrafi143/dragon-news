import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  //   console.log(news);
  return (
    <div className="space-y-5 border border-gray-300 p-5 shadow-lg rounded-2xl mt-3">
      <img
        className="w-full h-[350px] object-cover"
        src={news.image_url}
        alt=""
      />
      <h2 className="text-2xl">{news.title}</h2>

      <p>{news.details}</p>
      <Link className="btn btn-secondary" to={`/category/${news.category_id}`}>
        {" "}
        Back to Category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;