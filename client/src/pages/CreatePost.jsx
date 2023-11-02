import React, { useEffect, useState } from "react";
import { categoryData } from "../data/data";
import axios from "axios";
import ReactQuill from "react-quill";
import { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

import "../editor.css";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "Inter",
  "lucida",
];
Quill.register(Font, true);

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

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "code-block",
];

const CreatePost = () => {
  const navigate = useNavigate();
  const initialInput = {
    // image: "",
    imageURL: "",
    title: "",
    content: "",
    description: "",
    category: "All Categories",
  };

  const [inputFields, setInputFields] = useState(initialInput);

  const module = {
    toolbar: toolbarOptions,
  };

  const { imageURL, title, content, category, description } = inputFields;

  const sendBlogPostData = async () => {
    try {
      await axios.post("http://localhost:5000/api/v1/posts", {
        title,
        description,
        content,
        category,
        coverImage: imageURL,
      });
      alert("Post is Published");
      navigate("/blogs");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendBlogPostData();
    setInputFields(initialInput);
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
      <div className="h-72">
        <img
          src={
            imageURL ||
            "https://images.pexels.com/photos/2156884/pexels-photo-2156884.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <form className="mt-10 " onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
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
                name="imageURL"
                value={imageURL}
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
            formats={formats}
            theme="snow"
            value={inputFields.content}
            onChange={(value) =>
              setInputFields({ ...inputFields, content: value })
            }
          />
        </div>

        <Button title="Publish" />
      </form>
    </div>
  );
};

export default CreatePost;

{
  /* <Input
          label="Title"
          hFor="title"
          type="text"
          name="title"
          id="title"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          required
        /> */
}
