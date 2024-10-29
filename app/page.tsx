'use client'

import { useState } from "react";
import Minus from '@/components/minus'
import Add from '@/components/add'
import Reset from '@/components/reset'




export default function Home() {
  const [count, setCount] = useState(0);




  function handleReset(){
    setCount(0)
  }



  return (
      <div className="h-screen bg-slate-100 pt-10">
        <div className="w-[300px] h-[300px] bg-slate-200 rounded mx-auto  flex flex-col gap-5">
          <h1 className="text-center font-bold p-3 text-gray-500 text-lg font-sans">
            Counter App
          </h1>
          <div className="flex justify-evenly">
            <Minus count={count} setCount = {setCount} />
            <div className="bg-white text-center w-20 h-7 rounded-md text-md font-bold text-gray-500">{count}</div>
            <Add count={count} setCount = {setCount} />
          </div>
           <Reset count={count} setCount = {setCount}/>
      </div>
      </div>
  );
}
