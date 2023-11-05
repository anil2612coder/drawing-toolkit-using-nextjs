"use client"
import {activeMenuItemClick} from "@/app/redux/slice/menuSlice";
import {BiSolidPencil,BiSolidEraser,BiSolidDownload,BiLeftArrowCircle,BiRightArrowCircle,BiRevision} from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { menu_items } from "../constants";




export default function Menu(){
 const dispatch = useDispatch();
 console.log(menu_items[0], menu_items[1])

 const handleMenuClick =(item)=>{
  dispatch(activeMenuItemClick(item))
 }

    return (
      <div className="absolute flex left-1/2 shadow-md bg- transform -translate-x-1/2 w-1/4  justify-around top-10  py-2 rounded-md border-2 border-gray-300">
        <div className="cursor-pointer h-9 w-10 flex justify-center items-center  rounded-md" onClick={() => handleMenuClick(menu_items[0])}>
       <BiSolidPencil className="text-2xl"/>
        </div>
        <div className="cursor-pointer h-9 w-10 flex justify-center items-center rounded-md" onClick={() => handleMenuClick(menu_items[1])}>
       <BiSolidEraser className="text-2xl"/>
        </div>
        <div className="cursor-pointer h-9 w-10 flex justify-center items-center rounded-md">
       <BiLeftArrowCircle className="text-2xl"/>
        </div>
        
        <div className="cursor-pointer h-9 w-10 flex justify-center items-center rounded-md">
       <BiRightArrowCircle className="text-2xl"/>
        </div>
        <div className="cursor-pointer h-9 w-10 hover:bg-red-600 flex justify-center items-center rounded-md">
       <BiRevision className="text-2xl"/>
        </div>
        
        <div className="cursor-pointer h-9 w-10 flex justify-center items-center rounded-md">
       <BiSolidDownload className="text-2xl"/>
        </div>
        
       
      </div>
    )
}