import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen">
      <aside className="flex w-64 bg-black p-2 flex-col">
        <Image
          className="mx-4 my-5"
          src="/logo.svg"
          alt="Logo Spotify"
          width={140}
          height={40}
        />

        {/* PAGES */}

        <div className="flex flex-col">
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

        {/* SONGS OPTIONS */}

        <div className="mt-4">
          <Link
            href="#"
            className="flex  w-full px-6 py-3 rounded-md gap-5 items-center hover:bg-zinc-800 transition ease-in-out"
          >
            <Image src="/playlist.svg" alt="" width={24} height={24} />
            <p className="flex-row font-semibold ">Create Playlist</p>
          </Link>

          <Link
            href="#"
            className="flex  w-full px-6 py-3 rounded-md gap-5 items-center hover:bg-zinc-800 transition ease-in-out"
          >
            <Image src="/songs.svg" alt="" width={24} height={24} />
            <p className="flex-row font-semibold ">Linked Songs</p>
          </Link>

          <Link
            href="#"
            className="flex  w-full px-6 py-3 rounded-md gap-5 items-center hover:bg-zinc-800 transition ease-in-out"
          >
            <Image src="/episodes.svg" alt="" width={24} height={24} />
            <p className="flex-row font-semibold ">Your Episodes</p>
          </Link>
        </div>

        {/* TEXT LINKS */}

        <div className="mt-4 flex flex-col gap-2 ">
          <Link href="#" className="flex  w-full px-6   items-center ">
            <p className="flex-row font-semibold ">FAV</p>
          </Link>

          <Link href="#" className="flex  w-full px-6   items-center ">
            <p className="flex-row font-semibold ">Dayly Mix1</p>
          </Link>

          <Link href="#" className="flex  w-full px-6   items-center ">
            <p className="flex-row font-semibold ">Discover Weekly</p>
          </Link>

          <Link href="#" className="flex  w-full px-6   items-center ">
            <p className="flex-row font-semibold ">Malayalam</p>
          </Link>

          <Link href="#" className="flex  w-full px-6   items-center ">
            <p className="flex-row font-semibold ">Dance / Electronix Mix</p>
          </Link>

          <Link href="#" className="flex  w-full px-6   items-center ">
            <p className="flex-row font-semibold ">EDM / Popular</p>
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
