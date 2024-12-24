import React, {useState} from "react";

const Todofrom = (props) => {
  const {todo, saveTodo} = props;
  const [inputData, setInputData] = useState(todo ? todo.text : "");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) {
      saveTodo(inputData);
    } else {
      saveTodo(inputData, todo.id);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className=' flex gap-[20px]'>
      <input
        className='rounded-2xl px-[20px]'
        type='text'
        placeholder='write text'
        value={inputData}
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />
      <input className='bg-[#fff] px-[10px] rounded' type='submit' />
    </form>
  );
};

export default Todofrom;
