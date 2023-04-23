import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import postData from "../json/post.json";
import { Link } from "react-router-dom";
import AddPost from "./AddPost";

export default function Home() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log("The page is loaded!");
  }, []);

  return (
    <Layout>
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold">Home Page </h1>
        <MagnifyingGlassIcon className=" h-6 w-6 my-2 ml-2" />
        
        <h2 className="text-3xl">Home content</h2>
        <div className="h-auto grid grid-cols-3 gap-6">
          {postData.map((el, index) => (
            <Link
              to={`/post/${el.id}`}
              className="w-full h-30 bg-white rounded-lg drop-shadow-md overflow-hidden"
              key={index}
            >
              <img
                src={el.image}
                alt={""}
                className="object-cover w-full h-30"
              />
              <div className="p-4">
                <div className="text-xl bold">{el.title}</div>
                <div className="text-sm">
                  {el.author} <span>{el.created_at}</span>
                </div>
                <div className="">{el.content}</div>
              </div>
            </Link>
          ))}
        </div>
        <AddPost />
      </section>
    </Layout>
  );
}
