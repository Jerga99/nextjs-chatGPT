import Image from "next/image";

export default function Message({text, avatar, idx}) {

  const bgColorClass = idx % 2 === 0 ? "bg-slate-100" : "bg-slate-200";

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
