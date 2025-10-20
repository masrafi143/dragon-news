import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoryPromise);
  console.log(categories);
  return (
    <div>
      <h2 className="font-bold">All Categories: ({categories.length})</h2>
      <div className="grid grid-cols-1 mt-5 gap-2 font-semibold text-accent">
        {categories.map((category) => (
          <NavLink to={`/category/${category.id}`} key={category.id} className={"btn bg-white border-0 hover:bg-base-200"}>
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
