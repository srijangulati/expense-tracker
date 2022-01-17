import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  LinearProgress,
  Modal,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { AddExpense } from "./AddExpense";

export default function ExpenseCard(props) {
  const [openExpense, setOpenExpense] = useState(false);

  const closeExpense = () => setOpenExpense(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    boxShadow: 24,
    padding: "1.3rem",
    background: "white",
    borderRadius: '.5rem'
  };

  const value = (props.spend / props.max) * 100;

  const getColor = () => {
    switch (true) {
      case value < 50:
        return "success";
      case value < 75:
        return "warning";
      default:
        return "error";
    }
  };
  return (
    <>
      <Card variant="outlined" style={{ margin: "1.6rem" }}>
        <CardHeader
          title={props.name}
          subheader={`${props.spend} / ${props.max}`}
        />
        <CardContent>
          <LinearProgress
            style={{ height: "1rem", borderRadius: ".5rem" }}
            variant="determinate"
            value={value}
            color={getColor()}
          />
        </CardContent>
        <CardActions style={{ justifyContent: "flex-end" }}>
          <Button> View expenses</Button>
          <Button onClick={() => setOpenExpense(true)}> Add expense</Button>
        </CardActions>
      </Card>

      <Modal open={openExpense} onClose={closeExpense}>
        <Box style={style}>
          <AddExpense close={closeExpense}></AddExpense>
        </Box>
      </Modal>
    </>
  );
}
