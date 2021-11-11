import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const CreateList = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");

  const setNewTask = ({ target }) => {
    setNewItem(target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    onSubmit(newItem);
  };

  return (
    <>
      <Form onSubmit={submit}>
        <Form.Group>
          <Row className="mb-2">
            <Col>
              <Form.Control
                type="text"
                placeholder="Add to-do "
                onChange={setNewTask}
              />
            </Col>
            <Col sm={2}>
              <Button variant="primary" size="sm" type="submit">
                Add
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </>
  );
};

export default CreateList;
