import { useState } from "react";
import NewExpenseForm from "./NewExpensesForm";
import "./NewExpenses.css";
function NewExpenses(props) {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandle = (enteredExpenseData) => {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(ExpenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = (editing) => {
    setIsEditing(editing);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new Expense</button>
      )}
      {isEditing && (
        <NewExpenseForm
          onCancel={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandle}
        />
      )}
    </div>
  );
}
export default NewExpenses;
