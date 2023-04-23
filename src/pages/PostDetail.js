import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

export default function PostDetail() {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <p className="text-center text-3xl">The post ID is {id}</p>
    </div>
  );
}
