import React, { useState } from "react";
import DisplaySingle from "./DisplaySingle";

export default function DisplayData({ userData }) {

  // const [deleted, setDeleted] = useState("");
  // const deleteHandler=(id)=>{
  //     setDeleted(id)
  // }
  // const deleteFilter = userData && userData.filter((data) => {
  //     return data.id !== deleted  ;
  //   });

  const [deletedIds, setDeletedIds] = useState([]);

  const deleteHandler = (id) => {
    setDeletedIds([...deletedIds, id]);
  };

  const deleteFilter =
    userData &&
    userData.filter((data) => {
      return !deletedIds.includes(data.id);
    });
  return (
    <div className=" d-flex flex-column justify-content-center align-items-center mt-2 ">
      {deleteFilter &&
        deleteFilter.map((item) => {
          return (
            <div
              style={{ border: "2px solid grey" }}
              className="text-center w-25 mt-2"
            >
              <DisplaySingle
              key={item.id}
                name={item.username}
                age={item.age}
                id={item.id}
                onDeleted={deleteHandler}
              />
            </div>
          );
        })}
    </div>
  );
}
