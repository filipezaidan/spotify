import Image from "next/image";
import { ButtonIcon } from "./ButtonIcon";

const MusicSelected = () => {
  return (
    <div className="flex items-center w-auto h-auto gap-4">
      <Image src="./events/1.svg" width={70} height={70} alt="" />
      <div className="flex flex-col ">
        <strong className="text-lg font-bold text-white">Dreaming On</strong>
        <span className="text-base font-bold text-zinc-400">NEFFEX</span>
      </div>
      <Image src="./icons/heart.svg" width={25} height={70} alt="" />
    </div>
  );
};

const PlayControls = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-4">
        <ButtonIcon src="./icons/playlist.svg" width={25} height={25} alt="" />
        <ButtonIcon src="./icons/back-play.svg" width={30} height={30} alt="" />
        <ButtonIcon src="./icons/play.svg" width={50} height={50} alt="" />
        <ButtonIcon src="./icons/next-play.svg" width={30} height={30} alt="" />
        <ButtonIcon src="./icons/loop-play.svg" width={25} height={25} alt="" />
      </div>
      <div className="flex w-[540px] items-center gap-2 ">
        <span className="text-white">2:11</span>
        <div className="w-full h-[5px] rounded bg-neutral-600">
          <div className="w-[80%] h-full rounded bg-stone-300"></div>
        </div>
        <span className="text-white">2:42</span>
      </div>
    </div>
  );
};

const InfoControls = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-2">
        <ButtonIcon
          src="./icons/microphone.svg"
          width={25}
          height={25}
          alt=""
        />
        <ButtonIcon
          src="./icons/query-queue.svg"
          width={25}
          height={25}
          alt=""
        />
        <ButtonIcon src="./icons/laptop.svg" width={25} height={25} alt="" />
        <ButtonIcon src="./icons/speaker.svg" width={25} height={25} alt="" />
        <input className=" rounded " type="range" />
        <ButtonIcon
          src="./icons/tabler-arrows.svg"
          width={25}
          height={25}
          alt=""
        />
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className=" flex  w-full items-center fixed bottom-0 justify-between  h-28 z-10 p-5 bg-zinc-800">
      <MusicSelected />
      <PlayControls />
      <InfoControls />
    </footer>
  );
};
