import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import StringStateVariables from "./StringStateVariables";
import BooleanStateVariables from "./BooleanStateVariables";
import DateStateVariable from "./DateStateVariables"
import ObjectStateVariable from "./ObjectStateVariable"
import ArrayStateVariable from "./ArrayStateVariable"
import ParentStateComponent from "./ParentStateComponent";
import ChildStateComponent from "./ChildStateComponent";
import ReduxExamples from "./ReduxExamples"



const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
      }
    
    return(
      <>
        <h1>Assignment 4</h1>
        <Add a={1} b={2} />
        <ClickEvent />
        <PassingDataOnEvent/>
        <PassingFunctions theFunction={sayHello} />
        <EventObject />
        <Counter/>
        <BooleanStateVariables />
        <StringStateVariables />
        <ReduxExamples/>
        <DateStateVariable />
        <ObjectStateVariable />
        <ArrayStateVariable />
        <ParentStateComponent />
        <ChildStateComponent />

      <br/>
      <ReduxExamples/>

<br/>

      </>
    );
   };
   export default Assignment4;
   