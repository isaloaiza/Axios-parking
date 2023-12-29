import React from "react";
import Posts from "./Pages/Posts/Posts";
import { Routes, Route } from "react-router-dom";
import Post from "./Pages/Post/Post";
import { PostInfo } from "./Pages/Posts/PostsInfo";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/:id/info" element={<PostInfo />} />
      </Routes>
    </>
  );
};

export default App;
