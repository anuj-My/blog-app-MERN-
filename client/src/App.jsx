import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import CreatePost from "./pages/CreatePost";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import UpdatePost from "./pages/UpdatePost";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import AuthorsBlog from "./pages/AuthorsBlog";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/update-post/:id" element={<UpdatePost />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/author/:author" element={<AuthorsBlog />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
