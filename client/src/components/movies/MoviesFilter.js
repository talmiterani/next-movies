import React from "react";
import { TextField, Container, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const MoviesFilter = ({ searchInput, onSearchInputChange }) => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          label="Search"
          variant="standard"
          value={searchInput}
          onChange={(e) => onSearchInputChange(e.target.value)}
          fullWidth
          sx={{ color: "black" }}
        />
      </Box>
    </>
  );
};

export default MoviesFilter;
