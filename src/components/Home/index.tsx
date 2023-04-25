import { useState, useEffect } from "react";
import { Movie } from "../../models/movie.model";
import MovieApi from "../../api/MovieApi";
import { APIKey } from "../../api/MovieApiKey";
import "./Home.scss";
import MovieList from "../MovieList";
import { useAppDispatch } from "../../store/store";
import { addMovie } from "../../store/slices/movieSlice";

type Props = {};

const Home = ({}: Props) => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string>("");

  const fetchMovie = async () => {
    try {
      const searchKey = search ? search : "iron";
      const { data: movies } = await MovieApi.get(
        `?apikey=${APIKey}&s=${searchKey}&type=movie`
      );
      console.log(movies);

      setTimeout(() => {
        dispatch(addMovie(movies.Search));
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [search]);

  return (
    <>
      <div>
        <h3 style={{ margin: "1rem 0" }}>Movies</h3>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <MovieList />
      </div>
    </>
  );
};

export default Home;
