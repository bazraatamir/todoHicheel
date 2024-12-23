import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoWrapper from "./components/todoWrapper";
import Todofrom from "./components/todofrom";
import "./index.css";

function App() {
  return (
    <>
      <TodoWrapper />
    </>
  );
}

export default App;

//let a = [1,2,3]
// [...a,5] [1,2,3,5]
