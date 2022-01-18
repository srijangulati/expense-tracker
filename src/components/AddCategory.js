import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../actions/expenseActions";

export default function AddCategory(props) {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const dispatch = useDispatch();

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeCost = (event) => {
    setCost(event.target.value);
  };

  const add = () => {
    dispatch(
      addCategory({
        name: name,
        limit: parseInt(cost),
      })
    );
    props.close();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
      <h4> Add Category </h4>
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
      <Button onClick={add}> Add </Button>
    </div>
  );
}
