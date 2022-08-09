import React, { useState } from "react";
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

  //with useState we basically craete a special kind of variable,
  //a variable where changes will lead this component function to be called again
  //we can assign initial value for that special variable

  //so this initial value is only considered when this component function is being executed for the first time for a given component instance

  const [title, setTitle] = useState(props.title);

  //this will be called whenever the expenceItem component function is being executed
  //this call 2 times because we are using ExpenceItem two times in Expences
  //two seperate instances of this component are being created
  console.log("expenceItem evaluated by react");

  //name a function like clickHandler if they are triggered upon an event
  const clickHandler = () => {
    //by calling this function you are telling raect that you wanna assign a new value to this state
    //and that then also tells react that the component in which this state was registered with useState should be re-evaluated
    //and therefore react will go ahead and execute this component function again and therefore also evaluate this jsx code again
    //and it will draw any changes which it's detected compared to the last time it evaluated this onto the screen
    setTitle("Updated!");
    console.log(title);
  };

  //this content between opening and closing card tag that is what will be available on props.children inside of that card
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

// react component is js function which returns JSX , since it is a function someone has to call it
// we used these functions like html elements in the jsx code , this is almost like function call
//by using our components in our jsx code we make react aware of our component functions
//whenever react evaluates jsx code it will call these component functions
//and those component functions stand to return jsx code which is also evaluated up until there is no more jsx code to be evaluated
//then it evaluates the overall result and translate that into DOM instructions which render on the screen
//it is all started by the index.js file where we initially point at this app component
//that is the first component function which is being called
//react goes through all thses components execute all thsese  components functions and draw something on to the screen but react never repeats that
// react goes through all of that when the application is initially rendered

//if you have a variable in your component function and that variable changes , react ignores it
//that code executes but the overall component function doesn't  execute again just because some variable change

//useState is a function provided by react library and this function allows us to define values as state
//where changes to thses values should reflect in the component function being called again
//useState is a so called react hook, there are other hooks as well
//all theses react hooks can be recognize by the fact that they start with the word "use"

//with useState we basically craete a special kind of variable,
//a variable where changes will lead this component function to be called again
//we can assign initial value for that special variable

//here initial value is props.title and we simply pass this as an argument to useState
// Now this special variable is created
//useState also return something it gives us access to this special variable
//it also return a function which we can then call to assign a new value to that variable

//useState actually returns an array ( first value is variable itself, second element in the array is that updating function)
// first element --> current state value
//second element --> function for updating that

//by calling this function you are telling raect that you wanna assign a new value to this state
//and that then also tells react that the component in which this state was registered with useState should be re-evaluated
//and therefore react will go ahead and execute this component function again and therefore also evaluate this jsx code again
//and it will draw any changes which it's detected compared to the last time it evaluated this onto the screen

//if you have data, which might change, and where changes to that data should be reflected on the user interface then you need state
//with state you can set and change values and when they do change react will re-evaluate the component in which the state was registered
//and only that component , not any other components just this component which this state was registered

//useState register some state,some value as a state for the component in which it is being called
//we have seperate states even if create a component more than once
//whenever state changes because we click a button in this case it's only this component function and
//only that specific instance where this component is being used where react will re-evaluate it
//only that specific instance is being re-evaluated and the other instances are not effected by that state change
//state really is seperated on a per component instance basis

//component function is re executed when the state is updated
//we always get a brand new snapshot of that state when this component function re-executes

//react keeps track of when we call useState in a given component instance for that first time
//and when we call it for the first time ever it will take that argument as an initial value
//but if a component is then re-executed because of such a state change for example,  react will not reinitialize the state
//instead it will detect that this state had been initialized in the past and it will just grab the latest state
//which is based on some state update for example, and give us that state instead
//so this initial value is only considered when this component function is being executed for the first time for a given component instance

//React will re-execute the component function and re-evaluate the jsx code whenever the state changes
