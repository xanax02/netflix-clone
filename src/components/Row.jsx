import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";

const Row = ({ title, requestUrl, id }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios.get(requestUrl).then((res) => {
      setMovies(res.data.results);
    });
  }, [requestUrl]);

  const slideLeft = () => {
    const ele = document.getElementById("slider" + id);
    ele.scrollLeft -= 500;
  };

  const slideRight = () => {
    const ele = document.getElementById("slider" + id);
    ele.scrollLeft += 500;
  };

  return (
    <>
      <h2 className="text-white md:text-xl p-4">{title}</h2>
      <div className="flex items-center relative group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white rounded-full opacity-50 hover:opacity-100 absolute z-10 hidden group-hover:block"
        />
        <div
          id={"slider" + id}
          className="h-full w-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth"
        >
          {movies?.map((movie, index) => {
            return <Movie key={index} movie={movie} />;
          })}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white rounded-full opacity-50 hover:opacity-100 z-10 absolute right-0 hidden group-hover:block"
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
