import { CounterProps } from "@/types/types"


export default function Add({count,setCount}:CounterProps){

    function handleAddition(value:number){
        setCount(value + 1)    
    }

    return (
        <button disabled={count===10} onClick={()=>handleAddition(count)} className="bg-lime-500 w-20 h-7 rounded-md text-xl font-bold text-white">+</button>
    )
}