import { useRef } from "react";
import "./NewExpensesForm.css";
function NewExpensesForm(props) {
  const enteredTitle = useRef();
  const enteredAmount = useRef();
  const enteredDate = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle.current.value,
      amount: +enteredAmount.current.value,
      date: new Date(enteredDate.current.value),
    };
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    enteredTitle.current.value = "";
    enteredAmount.current.value = "";
    enteredDate.current.value = "";
  };
  const onCancelHandler = () => {
    props.onCancel(false);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" ref={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" ref={enteredAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            ref={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={onCancelHandler}>Cancel</button>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default NewExpensesForm;
