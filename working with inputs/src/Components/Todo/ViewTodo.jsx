import React from "react";
import ACTIONS from "./Todo";
export default function ViewTodo({ data, dispatch }) {
  // console.log(data,'koky')
  return (
    <div className="mt-2">
      {data &&
        data.map((todo) => {
          return (
            <ul className="ms-5">
             
              <li style={{ color: todo.complete ? "#AAA" : "#000" }}>
                {todo.name}
              
              </li>
                <button
                onClick={() => {
                  dispatch({
                    type: ACTIONS.TOGGLE_TODO,
                    payload: { id: todo.id },
                  });
                }}
                className="btn btn-success "
              >
                Toggle
              </button>
             
              <p>{todo.id}</p>
              <button className="btn btn-danger ms-2">Delete</button>
            </ul>
          );
        })}
    </div>
  );
}
