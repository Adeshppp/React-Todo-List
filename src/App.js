import "./App.css";
import Header from "./MyComponents/Header"; //name
import { Todos } from "./MyComponents/Todos"; //constant
import { Footer } from "./MyComponents/Footer"; //constant
import React, { useState, useEffect } from "react";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am Deleted!!! ", todo);
    // Deleting this way in react doesn't work!!!!
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("adding this todo", title, desc);
    let sno = todos.length + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // const [todos, setTodos] = useState(initTodo); // defining empty todo array by using useState

  return (
    <Router>
      <Header title="My Todos List" searchBar={false} />
      <Routes>
        {/* older version of react router */}
        {/* <Route  path='/' render={() => {
      return(
        <>
        element={<AddTodo addTodo={addTodo}/>}
        element={<Todos todos={todos} onDelete={onDelete}/>}
        </>
      )
    }}>
    </Route> */}

        {/* <Route  path='/' element={<AddTodo addTodo={addTodo} />}/>
    <Route  path='/' element={<Todos todos={todos} onDelete={onDelete} />}/> */}

        <Route
          path="/home"
          element={
            <>
              <AddTodo addTodo={addTodo} />,
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
        />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
