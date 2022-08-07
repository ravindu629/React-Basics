import React from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

//react exposes all these default events as props which start with on
//for example we can add onClick --> it adds an event listener for click events to this button
//by assigning a value to the click event we can set what should happen when such a click occurs

//all thsese on props all thses event handler props want a function as a value
//a function paseed as a value for onClick and all thses other on props which then is executed when that event occurs

//we passed a pointer at this function as a value to onClick and react basically memorizes this and executes the function for us whenever the click occurs

//to all built in html elements we can add supported event listeners
//some events are only available on specific elements

function ExpenseItem(props) {
  //all these components and elements are composed together to form the overall ExpenseItem compont and
  //which then again used in other components to in the end overall , build the overall user interface

  //name a function like clickHandler if they are triggered upon an event
  const clickHandler = () => {
    console.log("clicked!!!");
  };

  //this content between opening and closing card tag that is what will be available on props.children inside of that card
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
