import { useState } from "react";
import { PlusIcon } from "../components/icon/PlusIcon";
import { ShareIcon } from "../components/icon/ShareIcon";
import { Button } from "../components/ui/Button";
import { Cards } from "../components/ui/Cards";
import { CreateContentModal } from "../components/ui/CreateContentModal";
import { SideBar } from "../components/ui/Sidebar";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function Dashboard() {
  const [modalOpen, setmodalOpen] = useState(false);
  const contents = useContent();
  return (
    <div>
      {/* SideBar Component */}
      <SideBar />

      {/* Main Content */}
      <div className="p-4 ml-72 min-h-screen bg-gray-200">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setmodalOpen(false);
          }}
        />

        <div className="flex justify-end gap-3 mb-3">
          <Button
            onClick={() => {
              setmodalOpen(true);
            }}
            variant="primary"
            text="Add Content"
            startIcon={<PlusIcon />}
          />

          <Button onClick={async()=>{
            const response =await axios.post(`${BACKEND_URL}/api/v1/brain/share/createLink`,{
              share : true
            },{
              headers:{
                "Authorization": localStorage.getItem("token")
              }
            }); 
            const ShareUrl = `http://localhost:5173${response.data.hash}`;
            alert(ShareUrl)
          }}
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon />}
          />
        </div>

        <div className="flex gap-x-2 flex-wrap">
          {contents.map(({ type, link, title }) => (
            <Cards
              key={link} 
              type={type}
              link={link}
              title={title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
