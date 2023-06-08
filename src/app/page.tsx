import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 bg-slate-500">
        <main>content</main>
        <footer>footer</footer>
      </div>
    </div>
  );
}
