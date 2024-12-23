import React from "react";

const TodoItem = ({data, edit}) => {
  //   console.log(edit);
  //   let text = "hi";
  return (
    <div className=''>
      <li className='flex justify-between items-center bg-[#355C7D] px-[20px] py-[10px] rounded-xl m-[10px]'>
        <p className='text-[#FFF]'>{data.text}</p>
        <button
          onClick={() => {
            edit(text, data.id);
          }}>
          засах
        </button>
        <button>Устгах</button>
      </li>
    </div>
  );
};

export default TodoItem;
