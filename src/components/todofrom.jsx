import React, {useState} from "react";

const Todofrom = ({change}) => {
  const [inputData, setInputData] = useState("");

  return (
    <div className=' flex gap-[20px]'>
      <input
        className='rounded-2xl px-[20px]'
        type='text'
        placeholder='write text'
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />
      <button>add</button>
    </div>
  );
};

export default Todofrom;
