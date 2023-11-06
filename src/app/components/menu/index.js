"use client"
import {activeMenuItemClick} from "@/app/redux/slice/menuSlice";
import {BiSolidPencil,BiSolidEraser,BiSolidDownload,BiLeftArrowCircle,BiRightArrowCircle,BiRevision} from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { menu_items } from "../constants";




export default function Menu(){
 const dispatch = useDispatch();

 const activeMenuItemstatechange = useSelector((state) => state.menu.activeMenuItem);
 const activeEffectEraser = activeMenuItemstatechange == menu_items[1]
 const activeEffectPencil = activeMenuItemstatechange == menu_items[0]

 const handleMenuClick =(item)=>{
  dispatch(activeMenuItemClick(item))
 }

    return (
      <div className="absolute flex left-1/2 shadow-md bg- transform -translate-x-1/2 w-1/4  justify-around top-10  py-2 rounded-md border-2 border-gray-300">
        <div className={`cursor-pointer h-9 w-10 flex justify-center items-center rounded-md ${activeEffectPencil && `bg-blue-300`} `} onClick={() => handleMenuClick(menu_items[0])}>
       <BiSolidPencil className="text-2xl"/>
        </div>
        <div className={`cursor-pointer h-9 w-10 flex justify-center items-center rounded-md ${activeEffectEraser && `bg-blue-300`} `} onClick={() => handleMenuClick(menu_items[1])}>
       <BiSolidEraser className="text-2xl"/>
        </div>
        <div className="cursor-pointer hover:bg-blue-100 h-9 w-10 flex justify-center items-center rounded-md">
       <BiLeftArrowCircle className="text-2xl"/>
        </div>
        
        <div className="cursor-pointer hover:bg-blue-100 h-9 w-10 flex justify-center items-center rounded-md">
       <BiRightArrowCircle className="text-2xl"/>
        </div>
        <div className="cursor-pointer hover:bg-blue-100 h-9 w-10 flex justify-center items-center rounded-md">
       <BiRevision className="text-2xl"/>
        </div>
        
        <div className="cursor-pointer hover:bg-blue-100 h-9 w-10 flex justify-center items-center rounded-md">
       <BiSolidDownload className="text-2xl"/>
        </div>
        
       
      </div>
    )
}