interface InputProps{
    placeholder : string 
    ref?: any
}
export function InputBox({placeholder,ref}:InputProps){
    return (
        <div>
            <input ref= {ref} placeholder={placeholder} type={"text"} className=" pt-3 px-4 py-3 border rounded gap-3 m-4"/>
        </div>
    )
}