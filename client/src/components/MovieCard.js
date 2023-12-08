import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

const MovieCard = (movie) => (
  // console.log(movie)
  // <div>{movie.id}</div>
  <Card sx={{ boxShadow: "none", border: "none" }} variant="outlined">
    <CardHeader title="Options" />
    <CardContent sx={{ padding: 2 }}>
      <Typography variant="h6">{movie.id}</Typography>
    </CardContent>
    <CardActions>
      {/* <Button size="small" color="l">
        Share
      </Button>
      <Button size="small" color="l">
        Learn More
      </Button> */}
    </CardActions>
  </Card>
);
export default MovieCard;
