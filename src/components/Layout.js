import React from "react";
import Header from "./Header";

export default function Layout(props) {
  return (
    <div className="container mx-auto w-screen h-screen transition-all duration-500 ease-out">
      <Header />
      <section className="w-11/12 mx-auto">{props.children}</section>
    </div>
  );
}
