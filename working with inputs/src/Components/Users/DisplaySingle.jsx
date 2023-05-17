import React, { useState } from "react";
export default function DisplaySingle(props) {
  const deletedHandler = () => {
    props.onDeleted(props.id)
  };
  return (
    <>
      <p>
        {props.name} ({props.age} years old)
      </p>
      <button onClick={deletedHandler} className="btn btn-danger">
        Delete
      </button>
    </>
  );
}
