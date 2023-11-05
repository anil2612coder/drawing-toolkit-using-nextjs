"use client"

import { useState } from "react"
import { colors} from "../constants";
import { useSelector } from "react-redux";


export default function Toolbox(){
    const [range ,setRagne] = useState(3)
    const activeMenuItemstatechange = useSelector((state) => state.menu.activeMenuItem)
    console.log(activeMenuItemstatechange)


      
    const updateBrushSize=(e)=>{
     console.log( e.target.value)
     setRagne( e.target.value)
    }
    return(
        <div className="absolute transform space-y-5 translate-y-1/2 top-1/4 left-8  border-2 rounded-md border-gray-300 shadow-lg">
            <div className="p-2">
                <h4 className="text-lg font-semibold font-serif">Stroke Color</h4>
                <div className="flex space-x-2  pt-2">
                    {colors.map((color,i)=>(
                         <div key={i} className={`h-6 w-6 rounded-md  ${color} hover:cursor-pointer shadow-md`}></div>
                        
                   ))}
                </div>
              
            </div>
            
            <div className="p-2">
            <h4 className="text-lg font-semibold font-serif">Brush Size</h4>
        
        <input className="w-full hover:cursor-pointer" type="range" value={range} min={1} max={10} step={1} onChange={updateBrushSize}/>
          <h1>{activeMenuItemstatechange}</h1>
            </div>
        </div>
    )
}