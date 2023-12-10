import React, { useRef } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import { ArrowDropDown, CloseRounded } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const MovieSort = ({ sortType, onSortTypeChange }) => {
  const action = useRef(null);
  const { t } = useTranslation();


  return (
    <FormControl variant="standard" sx={{ minWidth: 230 }}>
      <InputLabel id="sort-label">{t("sort_by")}</InputLabel>
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
        <MenuItem value="rating">{t("sort_by_items.rating")}</MenuItem>
        <MenuItem value="released">{t("sort_by_items.released")}</MenuItem>
        <MenuItem value="runtime">{t("sort_by_items.runtime")}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default MovieSort;
