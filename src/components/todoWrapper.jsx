import React, {useState} from "react";
import TodoItem from "./todoItem";
import Todofrom from "./todofrom";

const TodoWrapper = () => {
  const [TodoList, setTodoList] = useState([
    {
      id: Math.random().toString(),
      text: "Аяга угаах",
      isEditing: false,
    },
    {
      id: Math.random().toString(),
      text: "ор хураах",
      isEditing: false,
    },
  ]);

  const AddTodo = () => {};
  const editTodo = (text, id) => {
    let editData = TodoList.filter((element) => {
      return id === element.id;
    });
    editData[0].text = text;
  };
  const deleteTodo = () => {};
  return (
    <div className='flex flex-col rounded-xl gap-[80px] bg-[#000] p-[40px]'>
      <Todofrom />
      <ul>
        {TodoList.map((el) => (
          <TodoItem data={el} edit={editTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoWrapper;
