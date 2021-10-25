import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((films) => {
        setFilms(films);
      })
  }, []);

  return (
    <>
      {films.map((film) => (
        <div className="col-sm-5 mb-4" key={film.id}>
          <div className="card">
            <div className="card-body bg-dark">
              <h5 className="card-title text-center">{film.title}</h5>
              <p className="card-text">{film.description}</p>
                <p className="card-text text-muted d-flex justify-content">Release Year: {film.release_date}</p>
                <p className="card-text text-muted d-flex justify-content">Run Time: (min): {film.running_time}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Films;