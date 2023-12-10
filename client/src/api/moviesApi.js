import { Alert } from "@mui/material";
import axios from "axios";

const BASE_URL = "http://localhost:3000"; // Replace with your API base URL

export const getMoviesApi = async (id) => {
  try {
    const { data } = await axios.get("http://localhost:3000/movies");
    return data;
  } catch (error) {
    return (
      <>
        <Alert variant="filled" severity="error">
          Error fetching movies: {error}
        </Alert>
      </>
    );
  }
};

export const getMovieApi = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movies/${id}`);
    return data[0];
  } catch (error) {
    return (
      <>
        <Alert variant="filled" severity="error">
          Error fetching movies: {error}
        </Alert>
      </>
    );
  };
};
