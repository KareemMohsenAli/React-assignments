import React, { useReducer, useState } from "react";
import ViewTodo from "./ViewTodo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO:'toggle-todo',
};
function Reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, newTodo(action.payload.name)];

    case ACTIONS.TOGGLE_TODO:
        return state.map((todo)=>{
            if(todo.id===action.payload.id) {
                return {...todo,compelete: !todo.compelete};
            }
            return todo
        })
        
  }
}
function newTodo(name) {
  return { id: Date.now(), name: name, compelete: false };
}
export default function Todo() {
  const [name, setname] = useState("");
  const [state, dispatch] = useReducer(Reducer, []);

  const inputChangeHandler = (e) => {
    setname(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { name: name },
    });
  };
  console.log(state)
 
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" onChange={inputChangeHandler} />
      </form>
      <ViewTodo data={state} dispatch={dispatch}/>

    </div>
  );
}
