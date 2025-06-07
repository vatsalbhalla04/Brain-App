import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import { SignIn } from "./Pages/SignIn";
import { Signup } from "./Pages/Signup";
import { SharedContent } from "./Pages/SharedContent";

export default function App(){
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/share/shareLink" element={<SharedContent/>}/>
    </Routes>
    </BrowserRouter>
  )
}