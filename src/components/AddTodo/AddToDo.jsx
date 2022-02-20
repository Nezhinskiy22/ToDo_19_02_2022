import React, { useState } from "react";
import { Row, Col, Button, FormControl } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import s from "./AddTodo.module.css";

const Addtodo = ({ todo, setToDo }) => {
  const [value, setValue] = useState("");

  const saveTodo = () => {
    setToDo([
      ...todo,
      {
        id: uuidv4(),
        title: value,
        status: true,
      },
    ]);
    setValue("");
  };

  return (
    <Row>
      <Col className={s.addToDoForm}>
        <FormControl
          type="text"
          placeholder="Введіть завдання..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button className={s.btn} onClick={saveTodo}>
          Додати
        </Button>
      </Col>
    </Row>
  );
};

export default Addtodo;
