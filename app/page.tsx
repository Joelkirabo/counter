'use client'

import { useState } from "react";
import Button from '@/components/button'


export default function Home() {
  const [count, setCount] = useState(0);

  return (
      <div className="h-screen bg-slate-100 pt-10">
        <div className="w-[300px] h-[300px] bg-slate-200 rounded mx-auto  flex flex-col gap-5">
          <h1 className="text-center font-bold p-3 text-gray-500 text-lg font-sans">
            Counter App
          </h1>
          <div className="flex justify-evenly">
            <Button count={count} setCount = {setCount} text="-"/>
            <div className="bg-white text-center w-20 h-7 rounded-md text-md font-bold text-gray-500">{count}</div>
            <Button count={count} setCount = {setCount} text="+"/>
          </div>
           <Button count={count} setCount = {setCount} text="Reset"/>
      </div>
      </div>
  );
}
