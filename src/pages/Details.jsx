import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const param = useParams();
  console.log(param);
  return (
    <>
      <h1>Details</h1>
    </>
  );
};

export default Details;
