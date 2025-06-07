import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { InputBox } from "../components/ui/InputBox";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate(); 

  async function signUp() {
    const email = emailRef.current?.value;
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signUp`, {
        email,
        username,
        password,
      });
      alert("You have signed Up")
      console.log("Signup Success:", response.data);
      navigate("/signin");
      // Optionally redirect or show success toast
    } catch (error: any) {
      console.error("Signup Error:", error);
      alert(error?.response?.data?.message || "Signup failed. Try again.");
    }
  }

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded border min-w-48 p-8">
        <div className="font-normal pb-2 flex justify-center text-2xl cursor-default">
          SignUp
        </div>
        <div className="font-medium text-lg text-slate-700">
          <InputBox ref={emailRef} placeholder="Email" />
          <InputBox ref={usernameRef} placeholder="Username" />
          <InputBox ref={passwordRef} placeholder="Password" />
        </div>

        <div className="flex justify-center pt-4">
          <Button
            onClick={signUp}
            loading={false}
            fullWidth={true}
            variant="primary"
            text="SignUp"
          />
        </div>
      </div>
    </div>
  );
}
