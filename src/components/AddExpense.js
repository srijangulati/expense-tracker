import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from '../actions/expenseActions';

export function AddExpense(props) {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [notes, setNotes] = useState("");
  const dispatch = useDispatch();

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeCost = (event) => {
    setCost(event.target.value);
  };
  const onChangeNotes = (event) => {
    setNotes(event.target.value);
  };

  const add = () => {
    dispatch(addExpense({
      category: props.categoryName,
      cost: parseInt(cost),
      notes: notes,
      name: name,
      date: Date.now()
    }))
    props.close();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
      <h4> Add Expense </h4>
      <TextField
        style={{ width: "100%" }}
        value={name}
        onChange={onChangeName}
        label="Name"
        variant="outlined"
      />
      <TextField
        style={{ width: "100%" }}
        value={cost}
        onChange={onChangeCost}
        label="Cost"
        type="number"
        variant="outlined"
      />
      <TextField
        style={{ width: "100%" }}
        value={notes}
        onChange={onChangeNotes}
        label="Notes"
        multiline
        rows={3}
        variant="outlined"
      />
      <Button onClick={add}> Add </Button>
    </div>
  );
}
