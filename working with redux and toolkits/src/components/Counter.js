import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";
import { useState } from "react";
import { counterActions } from "../store";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const toggle=useSelector((state) => state.counter.hide);
  const disptach = useDispatch();
  const toggleCounterHandler = () => {
    // disptach({
    //   type:'toggle',
    // })
    disptach(counterActions.toggle())

  };
  const decrementHandler = () => {
    // disptach({
    //   type:'increment',
    // })
    disptach(counterActions.increment())

  };
  const incrementHandler = () => {
    // disptach({
    //   type:'decrement',
    // })
    disptach(counterActions.decrement())
  };
  const incremenbytentHandler=()=>{
    // disptach({
    //   type:'increase',
    //   amount:10
    // })
   console.log( disptach(counterActions.increase(10) ))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {toggle && <div className={classes.value}>{counter}</div>}

      <div className="m-2">
        
        <button onClick={decrementHandler}>Increment</button>
        <button onClick={incrementHandler}>Decrement</button>
        <button onClick={incremenbytentHandler}>Increment By 10</button>
      </div>
      <br></br>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
