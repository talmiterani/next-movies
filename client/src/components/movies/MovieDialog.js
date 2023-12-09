import {
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StarIcon from "@mui/icons-material/Star";

const MovieDialog = ({ open, handleClose, id }) => {
  const [movie, setMovie] = useState([null]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovie = async () => {
      if(!id) return;
      try {
        const { data } = await axios.get(`http://localhost:3000/movies/${id}`);
        setMovie(data[0]);
      } catch (error) {
        console.log(error);
      } finally {
        console.log(movie)
        setLoading(false);
      }
    };

    getMovie();
  }, [id]);
  return (
    <>
      <Dialog maxWidth="md" open={open} onClose={handleClose}>
        {loading ? (
          // Show loading spinner while fetching data
          <Box p={2} display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          movie && (
            <>
              <DialogContent sx={{ display: "flex" }}>
                <Container maxWidth="md">
                  <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={5}>
                      <img
                        src={movie.largeimage}
                        alt={movie.id}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          display: "block",
                          margin: "0 auto",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                            {movie.title}
                          </Typography>
                        </Grid>

                        <Grid item xs>
                          <Typography variant="body1">
                            {movie.runtime}
                          </Typography>
                        </Grid>
                        <Grid item xs>
                          <Grid container alignItems="center">
                            <Grid item>
                              <StarIcon />
                            </Grid>
                            <Grid item>{movie.rating || "0"}/10</Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs>
                          <Typography
                            variant="body1"
                            sx={{ mt: 1, mb: 2 }}
                            dangerouslySetInnerHTML={{ __html: movie.synopsis }}
                          ></Typography>
                        </Grid>
                        <Grid item xs>
                          <Button
                            size="small"
                            color="primary"
                            variant="outlined"
                            onClick={handleClose}
                            style={{
                              borderRadius: 28,
                              justifyContent: "space-between",
                              color: "black",
                              borderColor: "black",
                              "&:hover": {
                                borderColor: "black",
                              },
                              width: "40%",
                            }}
                          >
                            <ArrowBackIcon sx={{ mr: 1 }} />
                            Back to List
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Container>
              </DialogContent>
            </>
          )
        )}
      </Dialog>
    </>
  );
};

export default MovieDialog;
