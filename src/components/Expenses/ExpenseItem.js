import React from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  //all these components and elements are composed together to form the overall ExpenseItem compont and
  //which then again used in other components to in the end overall , build the overall user interface

  //this content between opening and closing card tag that is what will be available on props.children inside of that card
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
