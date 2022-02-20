import Header from "./components/Header/Header";
import Addtodo from "./components/AddTodo/AddToDo";
import "./App.css";
import Todolist from "./components/ToDoList/ToDoList";
import { useState } from "react";
import { Container } from "react-bootstrap";

function App() {
  const [todo, setToDo] = useState([
    {
      id: 1,
      title: "first todo",
      status: true,
    },
    {
      id: 2,
      title: "second todo",
      status: true,
    },
    {
      id: 3,
      title: "third todo",
      status: false,
    },
  ]);
  return (
    <Container>
      <Header />
      <Addtodo todo={todo} setToDo={setToDo} />
      <Todolist todo={todo} setToDo={setToDo} />
    </Container>
  );
}

export default App;
