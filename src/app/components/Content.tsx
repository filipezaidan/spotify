import Image from "next/image";

export const Content = () => {
  return (
    <main className="flex flex-1  flex-col gap-12">
      {/* Header controls */}
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
        {/* Profile */}
        <div className="flex items-center  px-0.5 py-1  w-36 h-12 rounded-full bg-black gap-1">
          <Image
            width={40}
            height={40}
            src={"./icons/profile.svg"}
            alt="Image profile"
          />

          <div className="flex items-center justify-around gap-1">
            <span className="font-bold text-xl">Angel</span>
            <button>
              <Image
                width={24}
                height={24}
                src={"./icons/arrow-bottom.svg"}
                alt="Image profile"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Songs */}
      <div className="flex flex-col flex-1 gap-6 ">
        <h2 className="text-3xl font-bold">Good morning</h2>
        {/* List of cards */}
        <div className="grid grid-flow-row grid-cols-4 grid gap-5">
          <div className="flex items-center rounded  overflow-hidden w-82 bg-zinc-800 h-24 gap-5">
            <Image
              className="object-cover"
              width={100}
              height={100}
              src={"./songs/1.svg"}
              alt=""
            />
            <span className="text-2xl font-semibold">Liked Songs</span>
          </div>

          <div className="flex items-center rounded  overflow-hidden w-82 bg-zinc-800 h-24 gap-5">
            <Image
              className="object-cover"
              width={100}
              height={100}
              src={"./songs/2.svg"}
              alt=""
            />
            <span className="text-2xl font-semibold">Liked Songs</span>
          </div>

          <div className="flex items-center rounded  overflow-hidden w-82 bg-zinc-800 h-24 gap-5">
            <Image
              className="object-cover"
              width={100}
              height={100}
              src={"./songs/3.svg"}
              alt=""
            />
            <span className="text-2xl font-semibold">Liked Songs</span>
          </div>

          <div className="flex items-center rounded  overflow-hidden w-82 bg-zinc-800 h-24 gap-5">
            <Image
              className="object-cover"
              width={100}
              height={100}
              src={"./songs/4.svg"}
              alt=""
            />
            <span className="text-2xl font-semibold">Liked Songs</span>
          </div>

          <div className="flex items-center rounded  overflow-hidden w-82 bg-zinc-800 h-24 gap-5">
            <Image
              className="object-cover"
              width={100}
              height={100}
              src={"./songs/5.svg"}
              alt=""
            />
            <span className="text-2xl font-semibold">Liked Songs</span>
          </div>
        </div>
      </div>
      {/* Shows */}
      <div className="flex flex-1"></div>
    </main>
  );
};
