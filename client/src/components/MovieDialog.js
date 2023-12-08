import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
      <Dialog open={open} onClose={handleClose}>
        {loading ? (
          // Show loading spinner while fetching data
          <Box p={2} display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          movie && (
            <>
              <DialogTitle>{movie.title}</DialogTitle>
              <DialogContent sx={{ display: "flex" }}>
                {/* Image on the left */}
                <Box mr={2}>
                  <img
                    src={movie.image}
                    alt={`Image for ${movie.id}`}
                    style={{
                      width: "150px",
                      height: "225px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
                {/* Details on the right */}
                <Box flex="1" display="flex" flexDirection="column">
                  <Typography variant="body1">
                    Runtime: {movie.runtime}
                  </Typography>
                  <Box display="flex" alignItems="center">
                    <StarIcon />
                    {movie.rating}/10
                  </Box>
                  <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
                    {movie.synopsis}
                  </Typography>
                  {/* "Back to List" button */}
                  <Paper
                    elevation={0}
                    sx={{
                      mt: "auto",
                      p: 2,
                      backgroundColor: "#f1f1f1",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ArrowBackIcon sx={{ mr: 1 }} />
                    <Button onClick={handleClose} color="primary">
                      Back to List
                    </Button>
                  </Paper>
                </Box>
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
