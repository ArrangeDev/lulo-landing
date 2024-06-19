import Image from "next/image";
import Hero from "./components/hero";
import Manage from "./components/manage";
import Wall from "./components/wall";
import Goodbye from "./components/goodbye";
import Faqs from "./components/faqs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <Hero />
      <Manage />
      <Wall />
      <Goodbye />
      <Faqs />
    </main>
  );
}
