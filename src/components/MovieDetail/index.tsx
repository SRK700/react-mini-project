import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import movieApi from "../../api/MovieApi";
import { APIKey } from "../../api/MovieApiKey";
import "./MovieDetail.scss";
import { MovieDetailData } from "../../models/movie.model";

type Props = {};

const MovieDetail = (props: Props) => {
  const [movie, setMovie] = useState<MovieDetailData | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();

  const fetchDetail = async () => {
    try {
      const { data } = await movieApi.get(
        `?apikey=${APIKey}&i=${id}&plot=full`
      );
      setMovie(data);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="movie-detail-con">
          <div className="movie-detail-img">
            <img src={movie?.Poster} alt={movie?.Title} />
          </div>
          <div className="movie-detail-info">
            <h3>{movie?.Title}</h3>
            <p style={{ margin: "2rem 0" }}>{movie?.Plot}</p>
            <div>
              <strong>Released : {movie?.Released}</strong>
            </div>
          </div>
        </div>
      ) : (
        <h4 style={{ margin: "1rem 0" }}>Loading...</h4>
      )}
    </div>
  );
};

export default MovieDetail;
