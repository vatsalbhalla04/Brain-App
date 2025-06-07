import { AcademicIcon } from "../icon/AcademicIcon";
import { TwitterIcon } from "../icon/TwitterIcon";
import { YoutubeIcon } from "../icon/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function SideBar(){
    return(
        <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-4">
            <div className="flex text-2xl">
                <div className="flex items-center gap-x-2 pt-5">
                <div className="text-purple-600">
                <AcademicIcon/>
                </div>
                <div className="font-medium text-gray-800 cursor-default">
                Brainly
                </div>
                </div>
            </div>
            <div className="pt-4 items-center">
                <SidebarItem icon={<TwitterIcon/>} text="Twitter"/>
                <SidebarItem icon={<YoutubeIcon/>} text="Youtube"/>
            </div>
        </div>
    )
}