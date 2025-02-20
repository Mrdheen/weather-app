import Heading from "./components/Hero";
import Content from "./components/Home1";
import Tree from "./components/Home3";
import Intervention from "./components/Home2";
import Testimony from "./components/Content1";
import Tescard from "./components/Home4";
import PartnersSection from "./components/Partner";
import Gallery from "./components/Home5";
import CallToAction from "./components/Home7";

export default function Main() {
  return (
    <main>
      <Heading />
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
