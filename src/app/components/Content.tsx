import { ListSongs } from "./Song";
import { Header } from "./Header";
import { Shows } from "./Show";

export const Content = () => {
  return (
    <main className="flex flex-1  flex-col gap-12">
      <Header />
      <ListSongs />
      <Shows />
    </main>
  );
};
