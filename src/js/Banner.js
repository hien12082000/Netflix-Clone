import React, { useEffect, useState } from "react";
import axios from "../core/axios";
import requests from "../core/requests";
import "../css/Banner.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Banner(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movies);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("${base_url}${
          movies?.backdrop_path || movies?.poster_path
        }")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movies?.title || movies?.name || movies?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movies?.overview, 250)}
        </h1>
      </div>

      <div className="banner__fadeBottom">

      </div>
    </header>
  );
}

export default Banner;
