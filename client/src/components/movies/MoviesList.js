import React, { Component } from "react";
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
  Container,
} from "@mui/material";
import MovieDialog from "./MovieDialog";
import { ArrowForward } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import MoviesFilter from "./MoviesFilter";
import MoviesSort from "./MoviesSort";
import { getMoviesApi } from "../../api/moviesApi";

class MoviesList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
      openDialog: false,
      movieId: null,
      currentPage: 1,
      searchInput: "",
      sortType: "",
    };
  }

  async componentDidMount() {
    try {
      const moviesData = await getMoviesApi()
      this.setState({ movies: moviesData || [] });
    }  finally {
      this.setState({ loading: false });
    }
  }

  handleOpenDialog = (movieId) => {
    this.setState({ movieId, openDialog: true });
  };

  handleCloseDialog = () => {
    this.setState({ openDialog: false });
  };

  handlePageChange = (event, value) => {
    this.setState({ currentPage: value });
  };

  setSearchInput(value) {
    this.setState({ searchInput: value, currentPage: 1 });
  }

  handleSortChange(type) {
    this.setState({
      currentPage: 1,
      sortType: type,
      movies: this.state.movies.sort((a, b) => b[type] - a[type]),
    });
  }

  render() {
    const { movies, loading, openDialog, movieId, currentPage } = this.state;

    const ITEMS_PER_PAGE = 16;
    const indexOfLastItem = this.state.currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;

    const allFilteredMovies = this.state.movies.filter((movie) =>
      movie.title
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase().trim())
    );
    const filteredMovies = allFilteredMovies.slice(
      indexOfFirstItem,
      indexOfLastItem
    );

    return (
      <>
        <Container sx={{ pb: 3 }}>
          <Grid
            sx={{ px: 3 }}
            container
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs={9} md={4}>
              <MoviesFilter
                searchInput={this.state.searchInput}
                onSearchInputChange={(value) => this.setSearchInput(value)}
              />
            </Grid>
            <Grid item>
              <MoviesSort
                sortType={this.state.sortType}
                onSortTypeChange={(value) => this.handleSortChange(value)}
              />
            </Grid>
          </Grid>
        </Container>

        {loading ? (
          // Show loading spinner while fetching data
          <Box p={2} display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          movies && (
            <Container sx={{ backgroundColor: "#00d7ff" }}>
              <Grid container>
                {filteredMovies.map((movie) => (
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
                      <CardActions sx={{ padding: 2 }}>
                        <Button
                          size="small"
                          variant="outlined"
                          fullWidth
                          onClick={() => this.handleOpenDialog(movie.id)}
                          style={{
                            borderRadius: 28,
                            justifyContent: "space-between",
                            color: "black",
                            borderColor: "black",
                            "&:hover": {
                              borderColor: "black",
                            },
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
                {filteredMovies.length ? (
                  <Pagination
                    count={Math.ceil(allFilteredMovies.length / ITEMS_PER_PAGE)}
                    page={currentPage}
                    onChange={this.handlePageChange}
                    sx={{ marginTop: 2 }}
                  />
                ) : (
                  <Typography variant="h2">Not found</Typography>
                )}
              </Box>
            </Container>
          )
        )}
        <MovieDialog
          open={openDialog}
          handleClose={this.handleCloseDialog}
          id={movieId}
        />
      </>
    );
  }
}

export default MoviesList;
