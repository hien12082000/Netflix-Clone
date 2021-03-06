import React, { useEffect, useState } from "react";
import axios from "../core/axios";
import "../css/row.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  const a = 1;
  console.log(a);
  return (
    <div className="row">
      <h2> {title}</h2>
      <div className="row__posters">
        {movies.map((movies) => (
          <img
            key={movies.id} // giup toi uu trang hon
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movies.poster_path : movies.backdrop_path
            }`}
            alt={movies.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
