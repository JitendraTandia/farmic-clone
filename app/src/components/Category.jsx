import React from "react";
import CategoryCard from "./CategoryCard";
import { categoryData } from "@/app/data/categoryData";

const Category = () => {
  return (
    <div className="mt-28">
      <div className="max-w-[70rem] mx-auto text-center">
        <h1 className="font-[playfairdisplay] text-5xl font-semibold">
          Choose Your Category
        </h1>
        <p className="text-[#737373] mt-4">
          Select your product from our category options
        </p>
        <div className="flex gap-10 mt-16">
          {categoryData.map((item, idx) => (
            <div key={idx}>
              <CategoryCard  img={item.img} title={item.title}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
