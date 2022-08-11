import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  //this function should be executed title input changes
  //if type in the title input field this function execute every keystroke
  //since we passed this function to react basically through this onChange prop react will make sure that we get such a event object
  //when this change event occurs
  //event object has bunch of data the interesting thing for us is target field
  //target simply points at the DOM element for which the event occurs, in this case this input element
  //input element has long list of properties which we can read and set.
  //it also has the value property . this value property holds the current value of this input at the point of time this event occurs
  //event.target.value to get the value which was currently entered when that event occured for that element on which we are listening

  //no matter how often this component function might execute again, this state is stored and survives
  //all these states inside of one component will then totally seperated from each other
  //whwnever you listen to the change event for an input if you read the value of that input element it will always be a string

  const titleChangeHandler = (event) => {
    //pass currently enetered value as a argument to the setEnteredTitle
    //setEnteredTitle(event.target.value);

    //one state object managed as one piece of state instead of three sperate slices
    //when you update your state react will not merge this with the old state , it will simply replace the old state with the new one
    //if you are updating the title you also want to copy in the existing values for amount and date
    //for that you can use spread operator and then you just override entered title
    //takes an object pulls out all the key value pairs and add them to this new object and
    //then we can still override key value pairs like in this case enteredTitle
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });

    //get the current value with every keystroke
    //console.log(event.target.value);
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);

    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);

    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  //onChange event trigger on every keystroke
  //here add onChange event listner to this input
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
