import type { ReactElement } from "react";

export interface ButtonProps{
    variant : "primary" | "secondary"; 
    text : string; 
    startIcon ?: ReactElement;
    endIcon ?: ReactElement ; 
    onClick ?: ()=>void; 
    fullWidth ?: boolean; 
    loading ?: boolean
}

export const variantClasses = {
    "primary" : "bg-purple-600 text-white font-medium", 
    "secondary" :"bg-purple-200 text-purple-600 font-medium",
}

export const defaultStyles = "flex items-center gap-x-2 px-4 py-2 rounded-md" 