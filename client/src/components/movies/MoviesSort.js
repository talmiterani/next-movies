import React, { useRef } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import { ArrowDropDown, CloseRounded } from "@mui/icons-material";

const MovieSort = ({ sortType, onSortTypeChange }) => {
  const action = useRef(null);

  return (
    <FormControl variant="standard" sx={{ minWidth: 230 }}>
      <InputLabel id="sort-label">Sort By</InputLabel>
      <Select
        action={action}
        labelId="sort-label"
        id="sort-select"
        value={sortType}
        onChange={(e) => onSortTypeChange(e.target.value)}
        IconComponent={(props) => {
          // show icon with the color red if we are currently focused on the select box
          if (sortType) {
            return (
              <IconButton
                size="small"
                variant="plain"
                color="neutral"
                onMouseDown={(event) => {
                  // stops the popup from appearing when this button is clicked
                  event.stopPropagation();
                }}
                onClick={() => {
                  onSortTypeChange("");
                  action.current?.focusVisible();
                }}
              >
                <CloseRounded />
              </IconButton>
            );
          }
          return <ArrowDropDown />;
        }}
      >
        <MenuItem value="rating">Rating</MenuItem>
        <MenuItem value="released">Released</MenuItem>
        <MenuItem value="runtime">Runtime</MenuItem>
      </Select>
    </FormControl>
  );
};

export default MovieSort;
