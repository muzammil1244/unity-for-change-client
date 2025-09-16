
import { IoMdArrowRoundBack } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import { useState } from "react";
export const Profile=()=>{

    const [menu,setmenu ]= useState(false)
    return(

        <div className="w-full h-full bg-white- overflow-x-hidden overflow-y-scroll ">
<div className=" relative w-full h-1/3 bg-gray-500">
<IoMdArrowRoundBack className=" absolute inline top-2 left-2 z-2"/>
<img className=" w-full h-full bg-cover " src="./cover image.jpg" alt="" />
<div className=" absolute size-30 transform -translate-x-1/4 translate-y-1/2 overflow-hidden   bottom-0 left-1/6 rounded-full border-white border-2  bg-green-400">
<img className="w-full h-full bg-cover  " src=      "https://images.unsplash.com/photo-1619197449441-4a5e108cb565?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlhbWdlc3xlbnwwfHwwfHx8MA%3D%3D"  alt="" />
</div>
<div className="absolute bottom-5 right-5 w-fit h-fit px-3 py-1  border border-white scale-80 hover:bg-gray-50/20 duration-200  cursor-pointer  rounded-2xl ">
    <h1 className=" font-bold tex-tsm text-gray-300">Edite Image</h1>

</div>
</div>

<div className="px-5 w-full h-fit mt-20 py3">
    <div className="flex border-b pb-10 border-gray-500 justify-between items-center ">
        <div className="flex-col  w-full h-full gap-10">
            <h1 className=" font-semibold text-gray-700 ">Muzammi@1244</h1>
            <p className=" text-gray-600">muzammil@gmail.com</p>

    </div>
<div className="flex gap-4 justify-end w-full  items-center   ">

<div className={`flex-col ${menu?"scale-100":"scale-0"} transition-all ease-in-out duration-200 gap-10 rounded-xl px-3 py-3 bg-gray-100    `}>
<h1 className="text-sm hover:text-gray-800 font-semibold lack text-gray-700 cursor-pointer  ">like posts</h1>
<h1 className="text-sm hover:text-gray-800 lack font-semibold text-gray-700 cursor-pointer ">comment posts</h1>
<h1 className="text-sm hover:text-gray-800 lack font-semibold text-gray-700 cursor-pointer ">you posts</h1>
    </div>

    
    <CiMenuKebab size={20} onClick={()=>setmenu(!menu)} className=" cursor-pointer hover:scale-110 duration-150 "/>

</div>


    </div>
    

</div>

</div>


    )
}