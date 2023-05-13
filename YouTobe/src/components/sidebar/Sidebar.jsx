import {Link} from "react-router-dom";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineFire} from "react-icons/ai";
import {MdSubscriptions} from "react-icons/md";
import {VscFileSubmodule} from "react-icons/vsc";
import {MdOutlineHistoryEdu} from "react-icons/md";
import {BsAlarm} from "react-icons/bs";
import {AiOutlineStar} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai";
import {FiMusic} from "react-icons/fi";
import {GrGamepad} from "react-icons/gr";
import {MdOutlineKeyboardArrowDown} from "react-icons/md"

import me from "../../Images/me.jpg"

export default function Sidebar() {
  
  return (
    <>
    <div className=" overflow-y-scroll h-screen fixed mt-[108px] w-3/12 bg-white">
      <div className="flex items-center pl-6 pb-4 hover:text-red-700"><Link className="flex" to="/"><AiOutlineHome className="mt-1 text-red-700"/> <span className="pl-3.5 text-red-700 max-md:hidden">Home</span></Link></div>
      <div className="flex items-center pl-6 pb-4 hover:text-red-700"><Link className="flex" to="/trending"><AiOutlineFire  className="mt-1"/> <span className="pl-3.5 max-md:hidden">Trending</span></Link></div>
      <div className="flex items-center pl-6 pb-4 hover:text-red-700"><Link className="flex" to="/subscriptions"><MdSubscriptions  className="mt-1"/> <span className="pl-3.5 max-md:hidden">Subscriptions</span></Link></div>
      <div className="flex items-center pl-6 pb-4 hover:text-red-700 max-md:hidden"><hr className="border-gray-950 w-full "/></div>
      <div className="flex items-center pl-6 pb-4 hover:text-red-700"><Link className="flex" to="/library"><VscFileSubmodule  className="mt-1"/> <span className="pl-3.5 max-md:hidden">Library</span></Link></div>
      <div className="flex items-center pl-6 pb-4 hover:text-red-700"><Link className="flex" to="/history"><MdOutlineHistoryEdu  className="mt-1"/> <span className="pl-3.5 max-md:hidden">History</span></Link></div>
      <div className="flex items-center pl-6 pb-4 hover:text-red-700"><Link className="flex" to="/watchlater"><BsAlarm  className="mt-1"/> <span className="pl-3.5 max-md:hidden" >Watch Later</span></Link></div>
      <div className="flex items-center pl-6 pb-4 hover:text-red-700"><Link className="flex" to="/favourites"><AiOutlineStar  className="mt-1"/> <span className="pl-3.5 max-md:hidden">Favourites</span></Link></div>
      <div className="flex items-center pl-6 pb-4 hover:text-red-700"><Link className="flex" to="/LikedVideos"><AiOutlineHeart  className="mt-1"/> <span className="pl-3.5 max-md:hidden">Liked Videos</span></Link></div>
      <div className="flex items-center pl-6 pb-4 hover:text-red-700"><Link className="flex" to="/music"><FiMusic  className="mt-1"/> <span className="pl-3.5 max-md:hidden">Music</span ></Link></div>
      <div className="flex items-center pl-6 pb-4 hover:text-red-700"><Link className="flex" to="/games"><GrGamepad  className="mt-1"/> <span className="pl-3.5 max-md:hidden">Games</span></Link></div>
      <div className="flex items-center pl-6 pb-4 hover:text-red-700"><Link  className="flex" ><MdOutlineKeyboardArrowDown  className="mt-1"/> <span className="pl-3.5 max-md:hidden">Show more</span></Link></div>
      <div className=" pl-6 gap-y-[16px] flex flex-col max-md:hidden">
        <div className="flex items-center gap-2 ">
          <img className="w-10 h-10 object-cover rounded-full" src={me} alt="img" />
          <h6> Leah Berry</h6>
          </div>
          <div className="flex items-center gap-2">
          <img className="w-10 h-10 object-cover rounded-full" src={me} alt="img" />
          <h6> Leah Berry</h6>
          </div>
          <div className="flex items-center gap-2">
          <img className="w-10 h-10 object-cover rounded-full" src={me} alt="img" />
          <h6> Leah Berry</h6>
          </div>
          <div className="flex items-center gap-2">
          <img className="w-10 h-10 object-cover rounded-full" src={me} alt="img" />
          <h6> Leah Berry</h6>
          </div>
          <div className="flex items-center gap-2">
          <img className="w-10 h-10 object-cover rounded-full" src={me} alt="img" />
          <h6> Leah Berry</h6>
          </div>
      </div>
    </div>
    </>
  )
}
