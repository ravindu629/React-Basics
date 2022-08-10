import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //this function should be executed title input changes
  //if type in the title input field this function execute every keystroke
  //since we passed this function to react basically through this onChange prop react will make sure that we get such a event object
  //when this change event occurs
  //event object has bunch of data the interesting thing for us is target field
  //target simply points at the DOM element for which the event occurs, in this case this input element
  //input element has long list of properties which we can read and set.
  //it also has the value property . this value property holds the current value of this input at the point of time this event occurs
  //event.target.value to get the value which was currently entered when that event occured for that element on which we are listening

  const titleChangeHandler = (event) => {
    //get the current value with every keystroke
    console.log(event.target.value);
  };

  //onChange event trigger on every keystroke
  //here add onChange event listner to this input
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onClick={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
