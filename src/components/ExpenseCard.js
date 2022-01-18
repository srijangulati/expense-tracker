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
import { useSelector } from "react-redux";
import { AddExpense } from "./AddExpense";
import { ViewExpenses } from "./VewiExpenses";

export default function ExpenseCard({name}) {
  const [openExpense, setOpenExpense] = useState(false);
  const [viewExpenses, setViewExpenses] = useState(false);

  const closeExpense = () => setOpenExpense(false);
  const closeViewExpenses = () => setViewExpenses(false);

  const categoryData = useSelector(state => state.expense.categories[name]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    boxShadow: 24,
    padding: "1.3rem",
    background: "white",
    borderRadius: '.5rem',
  };

  const tableState = {
    ...style,
    width: 'auto'
  };

  const value = (categoryData.cost / categoryData.limit) * 100;

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
          title={categoryData.label}
          subheader={`${categoryData.cost} / ${categoryData.limit}`}
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
          <Button onClick={() => setViewExpenses(true)}> View expenses</Button>
          <Button onClick={() => setOpenExpense(true)}> Add expense</Button>
        </CardActions>
      </Card>

      <Modal open={openExpense} onClose={closeExpense}>
        <Box style={style}>
          <AddExpense categoryName={name} close={closeExpense}></AddExpense>
        </Box>
      </Modal>

      <Modal open={viewExpenses} onClose={closeViewExpenses}>
        <Box style={tableState}>
          <ViewExpenses name={name} close={closeViewExpenses}></ViewExpenses>
        </Box>
      </Modal>


    </>
  );
}
