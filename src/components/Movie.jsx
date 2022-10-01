import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = (props) => {
  const [isLiked, setIsLiked] = useState();

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] xl:w-[300px] inline-block relative m-2">
      <img
        src={`https://image.tmdb.org/t/p/original${props.movie.backdrop_path}`}
        alt={props.movie.title}
      />
      <div className=" h-full w-full absolute top-0 left-0 opacity-0 hover:bg-black/80 hover:opacity-100 flex justify-center items-center">
        <p className="white-space-normal text-xs md:text-sm text-white font-bold">
          {props.movie.title}
        </p>
        <p className="absolute top-4 left-4">
          {isLiked ? (
            <FaHeart className="text-white" />
          ) : (
            <FaRegHeart className="text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
