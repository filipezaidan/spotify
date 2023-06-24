import Image from "next/image";

export const Profile = () => {
  return (
    <div className="flex items-center px-0.5 py-1 w-36 h-12 rounded-full bg-black gap-1">
      <Image
        width={40}
        height={40}
        src="./icons/profile.svg"
        alt="Image profile"
      />

      <div className="flex items-center justify-around gap-1">
        <span className="font-bold text-xl">Angel</span>
        <button>
          <Image
            width={24}
            height={24}
            src="./icons/arrow-bottom.svg"
            alt="Image profile"
          />
        </button>
      </div>
    </div>
  );
};
