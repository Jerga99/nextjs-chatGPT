import Image from "next/image";
import { useEffect, useState } from "react";

export default function Message({text: initialText, avatar, idx}) {
  const [text, setText] = useState("");
  const bgColorClass = idx % 2 === 0 ? "bg-slate-100" : "bg-slate-200";

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(initialText.slice(0, text.length + 1));
    }, 25);

    return () => clearTimeout(timeout);
  });

  return (
    <div className={`flex flex-row ${bgColorClass} p-4`}>
      <div className="w-[30px] relative mr-4">
        <Image 
          src={avatar}
          width={30}
          height={30}
          alt=""
        />
      </div>
      <div className="w-full">
        {text}
      </div>
    </div>
  )
}
