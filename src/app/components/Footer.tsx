import Image from "next/image";

import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className=" flex w-full items-center justify-between  h-28 z-10 p-5 bg-zinc-800">
      {/* Music */}
      <div className="flex items-center w-auto h-auto gap-4">
        <Image src={"./events/1.svg"} width={70} height={70} alt="" />
        <div className="flex flex-col ">
          <strong className="text-lg font-bold text-white">Dreaming On</strong>
          <span className="text-base font-bold text-zinc-400">NEFFEX</span>
        </div>
        <Heart color="#3432" />
      </div>
      {/* Player controls */}
      <div>palyer controls</div>
      {/* Info devices */}
      <div>info devices</div>
    </footer>
  );
};
