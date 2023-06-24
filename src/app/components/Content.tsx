import { ListSongs } from "./Song";
import { Header } from "./Header";
import { Events } from "./Event";

export const Content = () => {
  return (
    <main className="flex text-white bg-stone-950 ml-64 flex-1 flex-col py-6 px-10 justify-between gap-10">
      <Header />
      <ListSongs />
      <Events />
    </main>
  );
};
