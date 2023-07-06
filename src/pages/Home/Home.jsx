import React from "react";
import "./Home.scss";
import { Intro } from "./intoro";
import { PopularBlogs } from "./Popular blogs/PopularBlogs";
import { Catagory } from "./Catagory";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <div className="container">
        <PopularBlogs />
        <Catagory />
      </div>
    </div>
  );
};

export default Home;
