import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen">
      <aside className="flex w-72 bg-black p-2 flex-col">
        <Image
          className="m-5 "
          src="/logo.svg"
          alt="Logo Spotify"
          width={140}
          height={40}
        />

        <div className="flex flex-col gap-2">
          <Link
            href="#"
            className="flex  w-full px-6 py-3 rounded-md gap-5 items-center hover:bg-zinc-800 transition ease-in-out"
          >
            <Image src="/home.svg" alt="" width={22} height={22} />
            <p className="flex-row font-semibold ">Home</p>
          </Link>

          <Link
            href="#"
            className="flex  w-full px-6 py-3 rounded-md gap-5 items-center hover:bg-zinc-800 transition ease-in-out"
          >
            <Image src="/search.svg" alt="" width={22} height={22} />
            <p className="flex-row font-semibold ">Search</p>
          </Link>

          <Link
            href="#"
            className="flex  w-full px-6 py-3 rounded-md gap-5 items-center hover:bg-zinc-800 transition ease-in-out"
          >
            <Image src="/library.svg" alt="" width={22} height={22} />
            <p className="flex-row font-semibold ">Library</p>
          </Link>
        </div>
      </aside>
      <div className="flex flex-1 bg-slate-500">
        <main>content</main>
        <footer>footer</footer>
      </div>
    </div>
  );
}
