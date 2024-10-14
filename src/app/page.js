import CardList from "@/components/main/BlogCard";
import CategoryList from "@/components/main/CategoryList";
import Contact from "@/components/main/Contact";
import HomePage from "@/components/main/HomePage";
import Projects from "@/components/main/Project";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-20 ">
        <div className="h-screen">
          <HomePage />
        </div>

        <CategoryList />
        <CardList />

        <Skills />
        <Projects />

        <Contact />
      </div>
    </div>
  );
}
