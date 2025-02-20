import Hero from "./components/Hero";
import Content from "./components/Content";
import Tree from "./components/Tree";
import Intervention from "./components/Intervention";
import Testimony from "./components/Content1";
import Tescard from "./components/Tescard";
import PartnersSection from "./components/Partner";
import Gallery from "./components/Gallery";
import CallToAction from "./components/Calltoaction";

export default function Home() {
  return (
    <main>
      <Hero />
      <Content />
      <Tree />
      <Intervention />
      <Testimony />
      <Tescard />
      <PartnersSection />
      <Gallery />
      <CallToAction />
    </main>
  );
}
