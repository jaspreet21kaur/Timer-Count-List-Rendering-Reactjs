// Create a component named Timer. It will feature 
// a timer with start and stop buttons to initiate the countdown 
// in stopwatch mode. When stopped, the timer should halt, and upon 
// starting again, it will resume from the time it was last stopped. 
// Additionally, include a 'Reset'
//  button; when clicked, it will reset the timer.

import React, { useEffect, useState } from 'react'

const TimeCountdown = () => {
    const [seconds,setSeconds]=useState(0)
    const [start,setStart]=useState(false)

    useEffect(()=>{
        let interval=null
        if(start){
            interval=setInterval(() => {
                setSeconds(seconds=>seconds+1)
            }, 1000);
        }else{
            clearInterval(interval)
        }return ()=>clearInterval(interval)
    },[start])
    const handlerStart=()=>{
        setStart(true)
    }
   const handleStop=()=>{
    setStart(false)
   }
   const reset=()=>{
    setSeconds(0)
    setStart(false)
   }
  return (
    <>
         <div className='flex flex-col justify-center items-center gap-2 '>
            <h1 className='font-bold'>Timer</h1>
            <div className='flex justify-around gap-12 items-center border border-gray-300 p-5 rounded-md'>
                <button onClick={handlerStart} className='border border-black px-2 py-1 rounded-md'>Start</button>
                <p>0:{seconds}</p>
                <button onClick={handleStop} className='border border-black px-2 py-1 rounded-md'>Stop</button>
            </div>
            <button onClick={reset} className='border border-black px-2 py-1 rounded-md'>Reset</button>
         </div>
    </>
  )
}

export default TimeCountdown