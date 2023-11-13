"use client"

import { useState } from "react"
import { colors, menu_items} from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { chooseColorClick,chooseSizeClick } from "@/app/redux/slice/toolboxSlice";


export default function Toolbox(){
    
    const dispatch =useDispatch();
    const activeMenuItemstatechange = useSelector((state) => state.menu.activeMenuItem)
    const showEraserToolBox = activeMenuItemstatechange !== menu_items[1]
    const size = useSelector((state)=>state.tool.size)
    const [rangeSize, setRangeSize] = useState(size)
    
  
    const chosenColor =(color)=>{
        dispatch(chooseColorClick(color))
    }


      
    const updateBrushSize=(e)=>{
        setRangeSize(e.target.value)
        dispatch(chooseSizeClick(e.target.value))
     
    }
    return(
        <div className="absolute transform space-y-5  translate-y-1/2 top-1/4 left-8  border-2 rounded-md border-gray-300 shadow-lg">
            {showEraserToolBox && <div className="p-2">
                <h4 className="text-lg font-semibold font-serif">Stroke Color</h4>
                <div className="flex space-x-2  pt-2">
                    {colors.map((color,i)=>(
                         <div key={i} className={`h-6 w-6 rounded-md  ${color} hover:cursor-pointer border-b border border-gray-400 shadow-md`} onClick={()=>chosenColor(color)}></div>
                        
                   ))}
                </div>
              
            </div>
            }
            <div className="p-2 w-48">
            <h4 className="text-lg font-semibold font-serif">Brush Size</h4>
        
        <input className="w-full hover:cursor-pointer" type="range" value={size} min={1} max={10} step={1} onChange={updateBrushSize}/>
         
            </div>
        </div>
    )
}