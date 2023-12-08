import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Paper,
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
      try {
        const { data } = await axios.get(`http://localhost:3000/movies/${id}`);
        setMovie(data[0]);
      } catch (error) {
        console.log(error);
      } finally {
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
                <Grid container rowSpacing={1}>
                  <Grid item xs={12} md={8}>
                    <img
                      src={movie.image}
                      alt={movie.id}
                      style={{
                        margin: "auto",
                        display: "block",
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                          {movie.title}
                        </Typography>
                      </Grid>

                      <Grid item xs>
                        <Typography variant="body1">{movie.runtime}</Typography>
                      </Grid>
                      <Grid item xs>
                        <StarIcon />
                        {movie.rating || "0"}/10
                      </Grid>
                      <Grid item xs>
                        <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
                          {movie.synopsis}
                        </Typography>
                      </Grid>

                      <Button
                        size="small"
                        color="primary"
                        variant="outlined"
                        fullWidth
                        onClick={handleClose}
                        style={{
                          borderRadius: 28,
                          justifyContent: "space-between",
                        }}
                      >
                        <ArrowBackIcon sx={{ mr: 1 }} />
                        Back to List
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </DialogContent>
              {/* <DialogTitle>{movie ? movie.title : ""}</DialogTitle>
        <DialogContent>
          <Typography>{movie ? movie.content : ""}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions> */}
            </>
          )
        )}
      </Dialog>
    </>
  );
};

export default MovieDialog;
