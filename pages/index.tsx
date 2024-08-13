import React from "react";
import Image from "next/image";
import { IoLogoSnapchat } from "react-icons/io";
import { Inter } from "next/font/google";
import { AiOutlineHome } from "react-icons/ai";
import { link } from "fs";
import { BiHash, BiMoney, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope } from "react-icons/bs";
import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton {
  title: string
  icon: React.ReactNode
}

const SidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: 'Home',
    icon: <AiOutlineHome />
  },
  {
    title: 'Explore',
    icon:<BiHash/>
  },
  {
    title: 'Notifications',
    icon:<BsBell/>
  },
  {
    title:'Messages',
    icon:<BsEnvelope/>
  },
  {
    title:'Bookmarks',
    icon:<BsBookmark/>
  },
  {
    title:'Payments',
    icon:<BiMoney/>
  },
  {
    title:'Profile',
    icon:<BiUser/>
  },
  {
    title: "More",
    icon:<SlOptions/>
  }

]
export default function Home() {
  return (
    <div >
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-4 mr-7 ">
          <div className="bg-[#63b97f] flex text-xl h-fit w-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all mr-1" >
            <div className="mt-1 mr-1  ">
              <IoLogoSnapchat />
            </div>
            <div>
              SnapIt!
            </div>
          </div>
          <div className="mt-2 text-lg pr-4">
            <ul>
              {SidebarMenuItems.map(item => <li className="text-lg flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-2 w-fit cursor-pointer mt-2" key={item.title}><span>{item.icon}</span> <span>{item.title}</span></li>)}
            </ul>
            <div className=" mt-5 px-3">
            <button className="bg-[#63b97f] p-2 rounded-full w-full text-lg font-semibold">Snap</button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] border border-gray-800 text-sm h-screen overflow-auto no-scrollbar">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>


          

        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
