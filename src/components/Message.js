import Image from "next/image";

export default function Message() {
  return (
    <div className="flex flex-row bg-slate-100 p-4">
      <div className="w-[30px] relative mr-4">
        <Image 
          src="/logo-open-ai.png" 
          width={30}
          height={30}
          alt=""
        />
      </div>
      <div className="w-full">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
      </div>
    </div>
  )
}
