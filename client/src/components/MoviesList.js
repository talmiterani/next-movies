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
  Box,
  CircularProgress,
} from "@mui/material";
import MovieDialog from "./MovieDialog";
import { ArrowForward } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/movies");
        setMovies(data || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
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
      {loading ? (
        // Show loading spinner while fetching data
        <Box p={2} display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        currentItems && (
          <Box sx={{ backgroundColor: "#00d7ff" }}>
            <Grid container>
              {currentItems.map((movie) => (
                <Grid item xs={6} sm={6} md={4} lg={3} xl={2} key={movie.id}>
                  <Card
                    sx={{
                      boxShadow: "none",
                      border: "none",
                      backgroundColor: "transparent",
                    }}
                    variant="outlined"
                  >
                    <CardContent sx={{ padding: 2 }}>
                      <CardMedia
                        sx={{ height: 380 }}
                        image={movie.image}
                        title={movie.imdbid}
                      />
                      <Typography variant="h6" sx={{ minHeight: "60px" }}>
                        {movie.title}
                      </Typography>
                      <Grid container alignItems="center">
                        <Grid item>
                          <StarIcon />
                        </Grid>
                        <Grid item>{movie.rating || "0"}/10</Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        variant="outlined"
                        fullWidth
                        onClick={() => handleOpenDialog(movie.id)}
                        style={{
                          borderRadius: 28,
                          justifyContent: "space-between",
                          color: "black",
                          borderColor: "black",
                          "&:hover": {
                            borderColor: "black",
                          }
                        }}
                      >
                        Read more
                        <ArrowForward sx={{ mr: 1 }} />
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box p={2} display="flex" justifyContent="center">
              <Pagination
                count={Math.ceil(movies.length / ITEMS_PER_PAGE)}
                page={currentPage}
                onChange={handlePageChange}
                sx={{ marginTop: 2 }}
              />
            </Box>
          </Box>
        )
      )}
      <MovieDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        id={movieId}
      />
    </>
  );
};

export default MoviesList;
