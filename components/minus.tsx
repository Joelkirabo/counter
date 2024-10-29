import { CounterProps } from "@/types/types"


export default function Minus({count,setCount}:CounterProps){

    function handleMinus(value:number){
        setCount(value - 1)    
    }

    return (
        <button disabled={count===0} onClick={()=>handleMinus(count)} className="bg-red-500 w-20 h-7 rounded-md text-xl font-bold text-white">-</button>
    )
}