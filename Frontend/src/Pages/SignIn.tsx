import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { InputBox } from "../components/ui/InputBox";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate(); 

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const email = emailRef.current?.value;

    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
        email,
        username,
        password,
      });
      const jwt = response.data.token;
      localStorage.setItem("token",jwt);
      // Now when the userSigned In direct it to the Dashboard's Page: 
      alert("You have signed In");
      console.log("SignIn Success:", response.data);
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Sign In Error:", error);
      alert(error?.response?.data?.message || "Sign In failed. Try again.");
    }
  }

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded border min-w-48 p-8">
        <div className="font-normal pb-2 flex justify-center text-2xl cursor-default">
          SignIn
        </div>
        <div className="font-medium text-lg text-slate-700">
          <InputBox ref={emailRef} placeholder="Email" />
          <InputBox ref={usernameRef} placeholder="Username" />
          <InputBox ref={passwordRef} placeholder="Password" />
        </div>

        <div className="flex justify-center pt-4">
          <Button
            onClick={signin}
            loading={false}
            fullWidth={true}
            variant="primary"
            text="SignIn"
          />
        </div>
      </div>
    </div>
  );
}
