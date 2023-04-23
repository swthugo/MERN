import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/postSlice";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const handleAddPost = () => {
    dispatch(addPost({ title, author, image, content }));
    alert("成功發布文章！");
    setTitle("");
    setAuthor("");
    setImage("");
    setContent("");
  };

  return (
    <div className="flex flex-col items-center">
      <label>
        <span>Title</span>
        <input
          type="text"
          placeholder={"Title"}
          value={title}
          maxLength={100}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full h-10 rounded-md bg-gray-50 px-4 py-2 mb-10 focus:outline-0 focus:bg-yellow-700/5"
        ></input>
      </label>
      <label>
        <span>Author</span>
        <input
          type="text"
          placeholder={"Author"}
          value={author}
          maxLength={100}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full h-10 rounded-md bg-gray-50 px-4 py-2 mb-10 focus:outline-0 focus:bg-yellow-700/5"
        ></input>
      </label>
      <label>
        <span>Image</span>
        <input
          type="text"
          placeholder={"Image URL"}
          value={image}
          maxLength={100}
          onChange={(e) => setImage(e.target.value)}
          className="w-full h-10 rounded-md bg-gray-50 px-4 py-2 mb-10 focus:outline-0 focus:bg-yellow-700/5"
        ></input>
      </label>
      <label>
        <span>Content</span>
        <input
          type="text"
          placeholder={"Today,I am..."}
          value={content}
          maxLength={100}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-10 rounded-md bg-gray-50 px-4 py-2 mb-10 focus:outline-0 focus:bg-yellow-700/5"
        ></input>
      </label>
      <button
        onClick={handleAddPost}
        className="mx-5 text-white font-medium px-5 py-2 bg-yellow-700/40 hover:bg-yellow-700/70 rounded-md mt-12 hover:scale-110 transition ease-in"
      >
        發布文章
      </button>
    </div>
  );
}
