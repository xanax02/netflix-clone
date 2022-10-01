import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";

const Row = ({ title, requestUrl }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios.get(requestUrl).then((res) => {
      setMovies(res.data.results);
    });
  }, [requestUrl]);

  console.log(movies);

  return (
    <>
      <h2 className="text-white md:text-xl p-4">{title}</h2>
      <div className="flex items-center relative group">
        <MdChevronLeft
          size={40}
          className="bg-white rounded-full opacity-50 hover:opacity-100 absolute z-10 hidden group-hover:block"
        />
        <div
          id={"slider"}
          className="h-full w-full overflow-x-scroll whitespace-nowrap scrollbar-hide"
        >
          {movies?.map((movie, index) => {
            return <Movie key={index} movie={movie} />;
          })}
        </div>
        <MdChevronRight
          size={40}
          className="bg-white rounded-full opacity-50 hover:opacity-100 z-10 absolute right-1 hidden group-hover:block"
        />
      </div>
      {/* <div className="flex items-center relative">
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll scroll-smooth scrollbar-hide whitespace-nowrap"
        >
          <MdChevronLeft
            size={40}
            className="bg-white rounded-full absolute z-10 opacity-50 items-center hover:opacity-100"
          />
          {movies?.map((movie, index) => {
            return <Movie key={index} movie={movie} />;
          })}
          <MdChevronRight />
        </div>
      </div> */}
    </>
  );
};

export default Row;
