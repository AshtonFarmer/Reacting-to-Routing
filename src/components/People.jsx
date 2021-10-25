import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const People = (props) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((allPeople) => {
        console.log(allPeople);
        setPeople(allPeople);
      })
  }, []);

  return (
    <>
      {people.map((people) => (
        <div className="col-sm-5 mb-4" key={people.id}>
          <div className="card">
            <div className="card-body bg-dark">
              <h5 className="card-title">Name: {people.name}</h5>
              <p className="card-text text-muted">Age: {people.age}</p>
              <p className="card-text text-muted">Gender: {people.gender}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default People;