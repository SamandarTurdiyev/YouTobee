import { useState } from "react";
import { Link } from "react-router-dom";

import { MyContext } from "../../Hooks/Usefetch"
import { useContext } from "react"


import {AiOutlineMenu} from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai";
import {BsCameraVideo} from "react-icons/bs";
import {MdViewCompact} from "react-icons/md";
import {IoMdNotificationsOutline} from "react-icons/io";
import {AiOutlineSearch} from "react-icons/ai";
import {MdOutlineDarkMode} from "react-icons/md"




import meimg from "../../Images/me.jpg"


const Navbar = () => {
  const {data,loading,searchTitle} = useContext(MyContext);

  
  


  return (
    <>
    <div className="flex justify-between w-full p-6 fixed top-0 z-10 bg-white">
      <div className="flex items-center ">
        {/* <AiOutlineMenu className="mr-6"/> */}
        <AiFillYoutube className="h-[50px] w-[50px] text-red-700"/> <span className="font-black text-2xl max-md:hidden">YouTube</span>
      </div>
      <div className="flex flex-col items-center pt-3">
      <div className="flex items-center bg-slate-100 rounded-full py-2 px-3 cursor-pointer">
        <input type="text" placeholder="Search"   className=" w-[300px] rounded-s-md bg-slate-100 outline-0 max-md:w-[200px]"/>
        <AiOutlineSearch className=""/>

      </div>
      <button><MdOutlineDarkMode/></button>

      </div>
      
      <div className="flex items-center gap-5">
         <BsCameraVideo className="max-md:hidden"/>
         <MdViewCompact className="max-md:hidden"/> 
          <IoMdNotificationsOutline className="max-md:hidden"/>
        <Link to="/login"><img className="w-10 h-10 object-cover rounded-full" src={meimg} alt="meimg"/></Link>
      </div>
    </div>
    </>
  )
}

export default Navbar