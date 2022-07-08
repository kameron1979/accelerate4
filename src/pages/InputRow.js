import { IconButton, Stack, TextField } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import SingleDropDown from "../components/dropdown/Dropdown.js";
import "react-dropdown/style.css";
import getLevels from "../data/Options";
import { MyCarousel } from "../components/carousel";
import { useState } from "react";
import Checkbox from "../components/checkbox/Checkbox";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "left"
};

export const InputRow = ({
  index,
  item,
  handleChange,
  handleRemove,
  handleAdd,
  values,
  inputFields
}) => {
  const [checkedOne, setCheckedOne] = useState(false);
  const updateOne = () => setCheckedOne(!checkedOne);
  const [checkedTwo, setCheckedTwo] = useState(true);
  const updateTwo = () => setCheckedTwo(!checkedTwo);

  return (
    <Stack spacing={2}>
      <TextField
        name="name"
        required
        fullWidth
        label="Container Name"
        onChange={(event) => handleChange(event, index)}
        value={item.name}
      />

      <div style={styles}>
        <SingleDropDown
          placeholder="Select Execution Level"
          value=""
          options={[1, 2, 3, 4]}
        />
      </div>

      <Checkbox
        name="dynamic"
        label="Dynamic"
        checked={checkedOne}
        onChange={updateOne}
      />
      <Checkbox
        name="envSpecific"
        label="Environment Specfic"
        checked={checkedTwo}
        onChange={updateTwo}
      />

      <div className="carousel"></div>

      <div style={{ alignItems: "center" }}>
        <IconButton onClick={handleRemove}>
          <RemoveIcon />
        </IconButton>
        <IconButton onClick={handleAdd}>
          <AddIcon />
        </IconButton>
      </div>
    </Stack>
  );
};
