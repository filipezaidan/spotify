import Image from "next/image";

interface ISong {
  title: string;
  img: string;
}

export const Song = ({ title, img }: ISong) => {
  return (
    <button className="flex items-center rounded  overflow-hidden w-82 bg-zinc-800 h-24 gap-5">
      <Image
        className="object-cover"
        width={100}
        height={100}
        src={img}
        alt="Image from song card"
      />
      <span className="text-xl text-white font-semibold">{title}</span>
    </button>
  );
};

export const ListSongs = () => {
  return (
    <div className="flex flex-col flex-1 gap-6 ">
      <h2 className="text-3xl text-white font-bold">Good morning</h2>

      <div className="grid grid-flow-row grid-cols-4 gap-5">
        <Song title="Liked Songs" img="./songs/1.svg" />
        <Song title="Neffex Playlist" img="./songs/2.svg" />
        <Song title="K/ DA" img="./songs/3.svg" />
        <Song title="Liked Songs" img="./songs/4.svg" />
        <Song title="Dance / Electronic Mix" img="./songs/5.svg" />
      </div>
    </div>
  );
};
