import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";
import { TextLink } from "./TextLink";

export const Sidebar = () => {
  return (
    <aside className="flex w-64 bg-black p-2 flex-col">
      <div className="mx-4 my-5">
        <Logo />
      </div>

      <div className="flex flex-col">
        <ButtonLink title="Home" icon="/home.svg" />
        <ButtonLink title="Search" icon="/search.svg" />
        <ButtonLink title="Library" icon="/library.svg" />
      </div>

      <div className="mt-4">
        <ButtonLink title="Create Playlist" icon="/playlist.svg" />
        <ButtonLink title="Linked Songs" icon="/songs.svg" />
        <ButtonLink title="Your Episodes" icon="/episodes.svg" />
      </div>

      <div className="mt-4 flex flex-col gap-4 ">
        <TextLink title="FAV" />
        <TextLink title="Dayly Mix1" />
        <TextLink title="Discover Weekly" />
        <TextLink title="Malayalam" />
        <TextLink title="Dance / Electronix Mix" />
        <TextLink title="EDM / Popular" />
      </div>
    </aside>
  );
};
