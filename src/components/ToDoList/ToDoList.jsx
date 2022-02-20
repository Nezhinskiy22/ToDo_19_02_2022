import { Button } from "react-bootstrap";
import React, { useState } from "react";
import s from "./ToDoList.module.css";

const Todolist = ({ todo, setToDo }) => {
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(null);
  const deleteTodo = (id) => {
    let newTodo = [...todo].filter((item) => item.id != id);
    setToDo(newTodo);
  };
  const statusTodo = (id) => {
    let newTodo = [...todo].filter((item) => {
      if (item.id == id) {
        item.status = !item.status;
      }
      return item;
    });
    setToDo(newTodo);
  };

  const editTodo = (id, title) => {
    setEdit(id);
    setValue(title);
  };

  const saveTodo = (id) => {
    let newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setToDo(newTodo);
    setEdit(null);
  };
  return (
    <div>
      {todo.map((item) => (
        <div key={item.id} className={s.listItems}>
          {edit == item.id ? (
            <div>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          ) : (
            <div>{item.title}</div>
          )}
          {edit == item.id ? (
            <div>
              <Button onClick={() => saveTodo(item.id)}>Видалити</Button>
            </div>
          ) : (
            <div>
              <Button onClick={() => deleteTodo(item.id)}>Видалити</Button>
              <Button
                onClick={() => editTodo(item.id, item.title)}
                className={s.btn}
              >
                Редагувати
              </Button>
              <Button onClick={() => statusTodo(item.id)} className={s.btn}>
                Закрити/Відкрити
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Todolist;
