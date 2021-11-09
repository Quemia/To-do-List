import React from "react";
import { ListGroup, Button } from "react-bootstrap";

//Função irá listar todas as tarefas, que poderão ser removidas
const List = ({ onDelete, value }) => {
  return (
    <>
      <ListGroup>
        <ListGroup.Item>{value.value}</ListGroup.Item>
        <Button variant="outline-danger" onClick={onDelete}>
          Apagar
        </Button>
      </ListGroup>
    </>
  );
};

export default List;
