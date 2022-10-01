import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Request";

const Main = () => {
  const [movies, setMovies] = useState();
  let movie;
  if (movies) {
    movie = movies[Math.floor(Math.random() * movies.length)];
  }

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const truncateText = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <>
      <div className="w-full h-[550px]">
        <div className="w-full h-full">
          <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover inline-block"
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt={`${movie?.title}`}
          />
          <div className="absolute top-[25%] p-4 md:p-8">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              {movie?.title}
            </h1>
            <div className="my-4">
              <button className="text-black px-5 py-2 border bg-gray-300">
                Play
              </button>
              <button className="text-white px-5 py-2 border border-gray-300 ml-4">
                Watch Later
              </button>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">
                Released: {movie?.release_date}
              </p>
              <p className="text-gray-200 w-full md:max-w-[75%] lg:max-w-[50%] xl:max-w-[40%]">
                {truncateText(movie?.overview, 150)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
