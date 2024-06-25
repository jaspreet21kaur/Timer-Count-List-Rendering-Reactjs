import React, { useState } from 'react'

const StateManagment = () => {
    const [count,setCount]=useState(0)


    const handleIncrement=()=>{
        setCount(count+1)
    }
    const handleDecrement=()=>{
        {
            count===0 ? count : setCount(count-1)
        }
 
    }
  return (
    <>
         <div className='h-[60%] m-auto mt-[10%] w-[40%] flex justify-center items-center border border-gray-300 rounded-md'>
                  
                <div className='flex gap-14 '>
                    <button onClick={handleIncrement} className='border border-black m-4 px-3 py-1 rounded-md'>Increment</button>
                    <p className='mt-6'>{count}</p>
                    <button onClick={handleDecrement} className='border border-black m-4 px-3 py-1 rounded-md'>Decrement</button>
                </div>
        </div>
    
    
    </>
  )
}

export default StateManagment