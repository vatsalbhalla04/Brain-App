import { useRef, useState } from "react";
import { CrossIcon } from "../icon/CrossIcon";
import { Button } from "./Button";
import { InputBox } from "./InputBox";
import axios from "axios";
import { BACKEND_URL } from "../../config";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}
export function CreateContentModal({ open, onClose }) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    const token = localStorage.getItem("token");
    await axios.post(
      `${BACKEND_URL}/api/v1/content/PostContent`,
      {
        link,
        title,
        type,
      },
      {
        headers: {
          "Authorization": localStorage.getItem("token")
        },
      }
    );
  }

  return (
    <div>
      {open && (
       <div>
           <div className="w-screen h-screen bg-gray-500 fixed top-0 left-0 opacity-70 flex justify-center">
        </div>
          <div>
          <div className="w-screen h-screen  fixed top-0 left-0 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white  p-4 rounded-md">
              <div
                className="flex justify-end cursor-pointer"
                onClick={onClose}
              >
                <CrossIcon />
              </div>
              <div>
                <div className="flex justify-center text-lg">Add Content</div>
                <InputBox ref={titleRef} placeholder={"Title"} />
                <InputBox ref={linkRef} placeholder={"Link"} />
              </div>
             <div>
              <h1>Content Type :</h1>
             <div className="flex gap-1 p-4 justify-center">
                <Button
                  text="Youtube"
                  onClick={() => {
                    setType(ContentType.Youtube);
                  }}
                  variant={
                    type === ContentType.Youtube ? "primary" : "secondary"
                  }
                />
                <Button
                  text="Twitter"
                  onClick={() => {
                    setType(ContentType.Twitter);
                  }}
                  variant={
                    type === ContentType.Twitter ? "primary" : "secondary"
                  }
                />
              </div>
             </div>
              <div className="flex justify-center">
                <Button
                  fullWidth={true}
                  onClick={addContent}
                  variant="primary"
                  text="Post"
                />
              </div>
            </span>
          </div>
          </div>
          </div>
       </div>
      )}
    </div>
  );
}
