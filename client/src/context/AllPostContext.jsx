import axios from "axios";
import { createContext, useState } from "react";

export const AllPostContext = createContext();

const AllPostProvider = ({ children }) => {
  const [allPost, setAllPost] = useState([]);

  const getAllPosts = async () => {
    const res = await axios.get("http://localhost:5000/api/v1/posts");
    const { posts } = res?.data.data;
    setAllPost(posts);
    console.log(posts);
  };

  const value = { allPost, getAllPosts };
  return (
    <AllPostContext.Provider value={value}>{children}</AllPostContext.Provider>
  );
};

export default AllPostProvider;
