import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useSelector } from "react-redux";
import AddCategory from "./components/AddCategory";
import ExpenseCard from "./components/ExpenseCard";

function App() {
  const [addCategory, setAddCategory] = useState(false);
  const closeAddCategory = () => setAddCategory(false);

  const categories = useSelector((state) => state.expense.categoryOrder);

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
    {
      categories.map((category) => <ExpenseCard key={category} name={category}></ExpenseCard>)
    }
    <Modal open={addCategory} onClose={closeAddCategory}>
        <Box style={style}>
          <AddCategory close={closeAddCategory}></AddCategory>
        </Box>
      </Modal>
    </>
  );
}

export default App;
