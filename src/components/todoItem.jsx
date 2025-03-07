import React from "react";

const TodoItem = ({data, edit}) => {
  return (
    <div className=''>
      <li className='flex justify-between items-center bg-[#355C7D] px-[20px] py-[10px] rounded-xl m-[10px]'>
        <p className='text-[#FFF]'>{data.Title}</p>
        <button
          onClick={() => {
            edit(data.id);
          }}>
          засах
        </button>
        <button>Устгах</button>
      </li>
    </div>
  );
};

export default TodoItem;
