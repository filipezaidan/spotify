import { ListSongs } from "./Song";
import { Header } from "./Header";
import { Events } from "./Show";

export const Content = () => {
  return (
    <main className="flex flex-col gap-10">
      <Header />
      <ListSongs />
      <Events />
    </main>
  );
};
