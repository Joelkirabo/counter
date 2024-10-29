import { CounterProps } from "@/types/types"


export default function Reset({count,setCount}:CounterProps){

    function handleReset(){
        setCount(0)    
    }

    return (
        <button disabled={count===0} onClick={()=>handleReset()} className="mx-auto bg-purple-500 w-20 h-7 rounded-md text-md font-bold text-white">Reset</button>
    )
}