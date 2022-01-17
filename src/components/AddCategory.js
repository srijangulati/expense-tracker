import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function AddCategory(props) {
  const [name, setName] = useState("");
  const [cost, setCost] = useState();

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeCost = (event) => {
    setCost(event.target.value);
  };

  const add = () => {
    props.close();
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
      <TextField
        style={{ width: "100%" }}
        value={name}
        onChange={onChangeName}
        label="Category name"
        variant="outlined"
      />
      <TextField
        style={{ width: "100%" }}
        value={cost}
        onChange={onChangeCost}
        label="Limit"
        type="number"
        variant="outlined"
      />
      <Button onClick={add} > Add </Button>
    </div>
  );
} 