import { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import axios from "axios";
import ErrorPage from "./ErrorPage";

import "../editor.css";

const Blog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState({});

  useEffect(() => {
    getPostByID();
  }, []);
  const getPostByID = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/posts/${id}`);
      const { post } = res.data.data;
      setBlogPost(post);
      console.log(post);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = () => {
    navigate(`/update-post/${id}`);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/posts/${id}`);

      alert("post deleted sucessfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const created = new Date(blogPost?.createdAt);
  const update = new Date(blogPost?.updatedAt);

  const createdDate = created.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const updatedDate = update.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return blogPost ? (
    <div className="max-w-screen-xl mx-auto min-h-screen">
      <div className="w-full h-72">
        <img
          src={blogPost?.coverImage}
          alt={blogPost?.title}
          className="w-full h-full object-cover "
        />
      </div>
      <div className="flex py-2   justify-end">
        <div
          className="p-2 rounded cursor-pointer text-white hover:bg-slate-400"
          onClick={handleEdit}
        >
          <AiFillEdit size={20} />
        </div>
        <div
          className="p-2 text-white rounded cursor-pointer hover:bg-slate-400"
          onClick={handleDelete}
        >
          <AiFillDelete size={20} />
        </div>
      </div>
      <div className="py-20 ">
        <div className="pb-12">
          <NavLink to="/" className="text-base underline text-gray-300">
            Home
          </NavLink>
          <HiOutlineChevronRight className="inline-block text-gray-400 mx-4" />
          <NavLink to="/blogs" className="text-base underline text-gray-300">
            All Articles
          </NavLink>
        </div>
        <h1 className="font-semibold text-[45px] pb-8 dark:text-white ">
          {blogPost?.title}
        </h1>
        <div className="pb-6">
          {created.getMilliseconds() === update.getMilliseconds() ? (
            <span className="text-gray-300">{createdDate}</span>
          ) : (
            <span className="text-gray-300">Updated: {updatedDate}</span>
          )}
        </div>
        <div className="dark:text-white pb-6 leading-relaxed text-base">
          {blogPost?.description}
        </div>
        <div
          className="dark:text-gray-300 leading-relaxed text-base editor"
          dangerouslySetInnerHTML={{ __html: blogPost?.content }}
        />
      </div>
    </div>
  ) : (
    <ErrorPage />
  );
};

export default Blog;
