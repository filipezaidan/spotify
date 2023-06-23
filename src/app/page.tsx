import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}
