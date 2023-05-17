import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useFetchApi from "./components/hooks/Fetch-api";

function App() {
  const [tasks, setTasks] = useState([]);
  const transformTasks = (taslobj) => {
    const loadedTasks = [];

    for (const taskKey in taslobj) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }

    setTasks(loadedTasks);
  };
  const { isLoading, error, sendRequest: fetchTasks } = useFetchApi({
    url: "https://react-http-61eb7-default-rtdb.firebaseio.com/tasks.json",
    transformTasks,
  });


  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
