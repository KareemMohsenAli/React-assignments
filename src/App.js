// import ExpensItem from './components/ExpensItem';
import DisplayData from "./Components/Users/DisplayData";
import UseReduce from "./Components/UseReduce";
import UserInput from "./Components/Users/UserInput";
import React, { useEffect, useState } from "react";
import Todo from "./Components/Todo/Todo";

function App() {
  const [usersData,setUsersData]=useState([])
  const saveInputData=(data)=>{
    // setUsersData([data,...usersData])
    setUsersData((prevUsersList)=>{
      return [...prevUsersList,data]
    })


  }
  console.log(usersData,'aa')
  return (
    <div>
      <UserInput onSaveData={saveInputData}/>
      <DisplayData userData={usersData}/>
      {/* <UseReduce/>  */}
      <Todo/>
    </div>
  );
}

export default App;
