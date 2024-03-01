import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext,";

const Main = () => {

  const { movie, loading } = useContext(MovieContext)

  console.log(movie);


  return <div>Main</div>;
};

export default Main;
