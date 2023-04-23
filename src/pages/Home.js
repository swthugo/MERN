import React from "react";
// import Layout from "../components/Layout";
import Header from "../components/Header";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    // <Layout>
    // </Layout>
    <section className="space-y-4">
      <Header />
      <h1 className="text-2xl">Home Page </h1>
      <MagnifyingGlassIcon className=" h-6 w-6 my-2 ml-2" />
      <p>Home content</p>
    </section>
  );
}
