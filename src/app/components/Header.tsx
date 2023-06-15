import Image from "next/image";
import { Profile } from "./Profile";

export const Header = () => {
  return (
    <div className="flex w-full h-auto justify-between">
      <div className="flex gap-5">
        <button className="w-12 h-12 bg-neutral-900 rounded-full p-2">
          <Image
            width={40}
            height={40}
            src="./icons/arrow-left.svg"
            alt="Arrow left icon"
          />
        </button>
        <button className="w-12 h-12 bg-neutral-900 rounded-full p-2">
          <Image
            width={40}
            height={40}
            src="./icons/arrow-right.svg"
            alt="Arrow right icon"
          />
        </button>
      </div>
      <Profile />
    </div>
  );
};
