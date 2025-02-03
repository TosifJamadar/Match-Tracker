import React from 'react'
import { CircleMinus as IconCircleMinus } from 'lucide-react'
import { CirclePlus as IconCirclePlus } from 'lucide-react'

export default function Match({score,increaseScore,decreaseScore,teamName}) {
  return (
    <div className="bg-white m-auto md:w-1/3 w-[500px] mt-5 rounded-lg shadow-lg">
    <h2 className="md:text-5xl text-4xl text-center my-4 font-bold text-red-400 pb-4 border-b-2">{teamName}</h2>
    <h3 className="text-center text-8xl text-red-400">{score}</h3>
    <div className="flex justify-around mb-5 md:mt-12">
    <IconCircleMinus size={60} onClick={decreaseScore} />
    <IconCirclePlus size={60} onClick={increaseScore}/>
    </div>
    
 </div>
  )
}
