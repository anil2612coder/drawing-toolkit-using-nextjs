
import {BiSolidPencil,BiSolidEraser,BiSolidDownload,BiLeftArrowCircle,BiRightArrowCircle,BiRevision} from "react-icons/bi"


export default function Menu(){
    return (
      <div className="absolute flex left-1/2 shadow-md bg- transform -translate-x-1/2 w-1/4  justify-around top-10  py-2 rounded-md border-2 border-gray-300">
        <div className="cursor-pointer h-9 w-10 flex justify-center items-center rounded-md">
       <BiSolidPencil className="text-2xl"/>
        </div>
        <div className="cursor-pointer h-9 w-10 flex justify-center items-center rounded-md">
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