import Dox from "../icon/Dox";
import { ShareIcon } from "../icon/ShareIcon";
import { Trash } from "../icon/Trash";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export function Cards({ title, link, type }: CardProps) {
  return (
    <div>
      <div className=" bg-white rounded-md shadow-lg max-w-80 p-8">
        <div className="flex justify-between">
          <div className="flex gap-x-3 items-center">
            <div className="text-gray-500">
              <Dox />
            </div>
            <div className="font-medium text-lg text-slate-700 pl-2 pr-3">
                {title}
            </div>
          </div>
          <div className="flex gap-x-3 items-center text-gray-500">
          <ShareIcon />
            <div>
              <Trash />
            </div>
          </div>
        </div>
        <div className="pt-3">
          {type === "youtube" && (
            <iframe
              className="w-full rounded-md"
              src={link.replace("watch","embed").replace("?v=","/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x.com","twitter.com")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}
