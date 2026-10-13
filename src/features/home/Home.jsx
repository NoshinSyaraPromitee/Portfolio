import Hero from "./Hero";
import Skills from "./Skills";
import LazySection from "../../shared/ui/LazySection/LazySection";

function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <LazySection importFn={() => import("./ContactCta/ContactCta")} minHeight={650} />
    </>
  );
}

export default Home;
