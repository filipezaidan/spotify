import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col py-6 px-10 ">
        <Content />
        <Footer />
      </div>
    </div>
  );
}
