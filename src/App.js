import React from "react";
import { useState } from "react";
import { AppContainer, Title } from "./style";
import { ListGroup, Button, Row, Col } from "react-bootstrap";
import CreateList from "./components/List/CreateList";
import { FaTrash } from "react-icons/fa";

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
      <Title>To-do List</Title>
      <CreateList onSubmit={newTask} />

      {tasks.map(({ value }, index) => (
        <ListGroup variant="flush">
          <Row className="mb-1">
            <Col>
              <ListGroup.Item>{value}</ListGroup.Item>
            </Col>
            <Col sm={2}>
              <Button
                size="sm"
                variant="outline-danger"
                onClick={() => {
                  deleteTask(index);
                }}
              >
                <FaTrash />
              </Button>
            </Col>
          </Row>
        </ListGroup>
      ))}
    </AppContainer>
  );
}

export default App;
