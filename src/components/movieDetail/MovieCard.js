import React from "react";

const MovieCard = (props) => {
  const { data } = props;
  return (
    <>
      {/* <div className="card-item">
        <div className="card-inner">
          <div className="card-top">
            <img className="card-img" src={data.Poster} />
          </div>
          <div className="card-botton">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p className="year">{data.Year}</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container">
        <div className="card">
          <img src={data.Poster} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{data.Title}</h5>
            <p className="card-text">{data.Title}</p>
            <a href="#" className="btn btn-primary align-bottom">
              Go somewhere
            </a>
            <p class="card-text">
              <small class="text-muted">{data.Year}</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
