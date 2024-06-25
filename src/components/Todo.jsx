import React from 'react';

const Todo = (props) => {
    // console.log(props.todos)
    const list=[...props.todos]
    console.log(list)
  return (
    <>
    <div className='flex flex-col justify-center items-center p-5 gap-3'>
        <h1 className='font-bold text-xl'>Todo List</h1>
            {list.map((el,index)=>(
            // console.log(el)
            <li className='flex flex-col gap-4 text-lg' key={index}>Todo: {el}</li>
            ))}
    </div>
    </>
  );
};

export default Todo