import Card from "../components/Card";
import CategoryItemList from "../components/CategoryItemList";
import { useContext, useEffect, useState } from "react";
import { SelectedCategoryContext } from "../context/SelectedCategoryContext";
import { AllPostContext } from "../context/AllPostContext";

const Blogs = () => {
  const { selectedCategory } = useContext(SelectedCategoryContext);
  const { allPost, getAllPosts } = useContext(AllPostContext);

  useEffect(() => {
    getAllPosts();
  }, []);

  const filterPosts = allPost.filter((item) => {
    if (selectedCategory === "All Categories") {
      return item;
    } else {
      return item.category === selectedCategory;
    }
  });


  const cardList = filterPosts.map((item) => {
    return <Card key={item._id} item={item} />;
  });

  return (
    <div className="max-w-screen-xl mx-auto  pt-28 min-h-screen">
      <div className=" mb-8 flex justify-between">
        <h1 className="font-semibold text-3xl text-white">All Blogs</h1>
        <CategoryItemList />
      </div>

      {cardList.length ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-8">
          {cardList}
        </div>
      ) : (
        <div className="text-white/40 font-semibold text-xl">
          No Post is found in{" "}
          <span className="text-white">"{selectedCategory}"</span> category.
        </div>
      )}
    </div>
  );
};

export default Blogs;
