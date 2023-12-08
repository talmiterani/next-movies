import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Pagination } from "@mui/material";
import MovieCard from "./MovieCard";

const MoviesList = () => {
  // const classes = useStyles();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/movies");
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, []);

  const ITEMS_PER_PAGE = 16;

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = movies.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <>
      <Grid container spacing={2} sx={{ backgroundColor: "#00d7ff" }}>
        {currentItems.map((movie) => (
          <Grid item xs={6} sm={6} md={4} lg={3} xl={2} key={movie.id}>
            <MovieCard {...movie} />
          </Grid>
        ))}
        <Pagination
          count={Math.ceil(movies.length / ITEMS_PER_PAGE)}
          page={currentPage}
          onChange={handlePageChange}
          sx={{ marginTop: 2 }}
        />
      </Grid>
    </>
  );
};

export default MoviesList;
