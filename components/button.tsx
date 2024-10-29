import { CounterProps } from "@/types/types"


export default function Button({count,setCount,text}:CounterProps){

    function handleAction(value:number){
        if(text === "-" && count>0){
            setCount(value - 1)    
        }else if(text === "+" && count < 10){
            setCount(value + 1) 
        }else if(text === "Reset"){
            setCount(0)
        }
    }

    return (
        <button onClick={()=>handleAction(count)} className={`${text==="-"?'bg-red-500':text==="+"?'bg-lime-500':text==="Reset"?'bg-purple-500 mx-auto':''} w-20 h-7 rounded-md text-xl font-bold text-white`}>{text}</button>
    )
}