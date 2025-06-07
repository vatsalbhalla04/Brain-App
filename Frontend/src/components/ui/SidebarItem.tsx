import type { ReactElement } from "react";

export function SidebarItem({text,icon}:{
    text: string; 
    icon: ReactElement
}){
    return (
        <div className="flex items-center text-gray-800 font-medium cursor-pointer hover:text-gray-500">
            <div className="p-2">
            {icon} 
            </div>
            <div className="text-lg">
            {text}
            </div>
        </div>
    )
}