import React from "react";
import { useState } from "react";
import { AppContainer, Title } from "./style";
import List from "./components/List/List";
import CreateList from "./components/List/CreateList";

function App() {
  const [tasks, setTasks] = useState([]);

  function newTask(task) {
    const addTasks = Array.from(tasks);
    addTasks.push({ id: tasks.length, value: task });
    setTasks(addTasks);
  }

  function deleteTask(index) {
    const delTasks = Array.from(tasks);
    delTasks.splice(index, 1);
    setTasks(delTasks);
  }

  return (
    <AppContainer>
      <>
        <Title>To-do list</Title>
        <CreateList onSubmit={newTask} />
        {tasks.map(({ id, value }, index) => {
          <List key={id} value={value} onDelete={() => deleteTask(index)} />;
        })}
      </>
    </AppContainer>
  );
}

export default App;
