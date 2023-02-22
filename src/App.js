import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import { useState } from "react";
const DUMMY_EXPENSES = [
  { id: "e1", title: "Television", amount: 220, date: new Date(2021, 10, 10) },
  {
    id: "e2",
    title: "Car insaurance",
    amount: 1000,
    date: new Date(2021, 9, 18),
  },
  { id: "e3", title: "Table", amount: 420, date: new Date(2021, 11, 11) },
  {
    id: "e4",
    title: "Computer System",
    amount: 870,
    date: new Date(2020, 10, 10),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
