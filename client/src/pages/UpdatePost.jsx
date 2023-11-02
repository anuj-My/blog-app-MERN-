import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { categoryData } from "../data/data";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "../editor.css";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["image", "blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];

const UpdatePost = () => {
  const initialInput = {
    // image: "",
    coverImage: "",
    title: "",
    content: "",
    description: "",
    category: "All Categories",
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState(initialInput);
  const { coverImage, title, content, category, description } = inputFields;

  const module = {
    toolbar: toolbarOptions,
  };

  useEffect(() => {
    getPostByID();
  }, []);

  const getPostByID = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/posts/${id}`);
      const { post } = res.data.data;
      console.log(post);
      setInputFields(post);
    } catch (error) {
      console.log(error);
    }
  };

  const updateBlogPost = async () => {
    try {
      const res = await axios.patch(
        `http://127.0.0.1:5000/api/v1/posts/${id}`,
        {
          title,
          description,
          content,
          category,
          coverImage,
        }
      );
      console.log(res);
      alert("Post is updated");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBlogPost();
    navigate(`/blogs/${id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputFields({
      ...inputFields,
      [name]: value,
    });
  };

  const categoryList = categoryData.map((item, index) => {
    return <option key={index}>{item.title}</option>;
  });

  return (
    <div className="pb-10 max-w-screen-xl mx-auto ">
      <div className="h-[50vh]">
        <img
          src={
            coverImage ||
            "https://images.pexels.com/photos/2156884/pexels-photo-2156884.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <form className="mt-10 " onSubmit={handleSubmit}>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-3 text-base "
        >
          Update Post
        </button>
        <div className="flex flex-col gap-8 mt-2">
          <div className="flex gap-8 items-center ">
            <div className="">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
              >
                Upload file
              </label>
              <input
                className="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
                name="image"
                // value={image}
                // onChange={handleChange}
              />
            </div>
            <span className="text-base pt-4 font-bold dark:text-white">OR</span>
            <div className="flex-1">
              <label
                htmlFor="image-url"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Image URL
              </label>
              <input
                type="url"
                id="image-url"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="coverImage"
                value={coverImage}
                placeholder=""
                required=""
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="category"
              value={category}
              onChange={handleChange}
            >
              {categoryList}
            </select>
          </div>

          <div>
            <label
              htmlFor="post-title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Post Title
            </label>
            <input
              type="text"
              name="title"
              value={title}
              id="post-title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Write the title here..."
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="post-description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Post Description
            </label>
            <input
              type="text"
              name="description"
              value={description}
              id="post-description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Write the description here..."
              required
              onChange={handleChange}
            />
          </div>

          <ReactQuill
            modules={module}
            theme="snow"
            value={inputFields.content}
            onChange={(value) =>
              setInputFields({ ...inputFields, content: value })
            }
          />
        </div>
      </form>
    </div>
  );
};

export default UpdatePost;
