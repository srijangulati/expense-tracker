import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import AddCategory from "./components/AddCategory";
import ExpenseCard from "./components/ExpenseCard";

function App() {
  const [addCategory, setAddCategory] = useState(false);
  const closeAddCategory = () => setAddCategory(false);

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
  return (
    <>
    <h3 style={{textAlign: 'center'}}> Expense Tracker </h3>
    <Button 
    style={{display: 'flex', marginInline: 'auto 1.3rem'}} 
    onClick={() => setAddCategory(true)}
    > Add Category</Button>
    <ExpenseCard name="Food" spend={600} max={1000}></ExpenseCard>
    <Modal open={addCategory} onClose={closeAddCategory}>
        <Box style={style}>
          <AddCategory></AddCategory>
        </Box>
      </Modal>
    </>
  );
}

export default App;
