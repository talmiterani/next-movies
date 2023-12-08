import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  Pagination,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import MovieDialog from "./MovieDialog";
import { ArrowForward } from "@mui/icons-material";

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

  const [openDialog, setOpenDialog] = useState(false);
  const [movieId, setMovieId] = useState();

  const handleOpenDialog = (movieId) => {
    setMovieId(movieId);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

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
            {/* <MovieCard {...movie} /> */}
            <Card sx={{ boxShadow: "none", border: "none" }} variant="outlined">
              <CardContent sx={{ padding: 2 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={movie.image}
                  title={movie.imdbid}
                />
                <Typography variant="h6">{movie.id}</Typography>
              </CardContent>
              <CardActions>
                {/* <Button
                  onClick={() => handleOpenDialog(movie.id)}
                  sx={{ marginTop: 2 }}
                  variant="contained"
                  color="primary"
                >
                  Read More
                </Button> */}
                <Button
                  size="small"
                  color="primary"
                  variant="outlined"
                  fullWidth
                  style={{ borderRadius: 28, justifyContent: "space-between" }}
                >
                  Read more
                  <ArrowForward sx={{ mr: 1 }} />

                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        <Pagination
          count={Math.ceil(movies.length / ITEMS_PER_PAGE)}
          page={currentPage}
          onChange={handlePageChange}
          sx={{ marginTop: 2 }}
        />
      </Grid>

      <MovieDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        id={movieId}
      />
    </>
  );
};

export default MoviesList;
