import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to={`/Details`}>
        <p>디테일 페이지로 이동</p>
      </Link>
    </>
  );
};

export default Home;
