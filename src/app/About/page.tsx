import AboutBMCCI from "./components/About1";
import OurHistory from "./components/About2";
import MissionSection from "./components/About3";
import SectionDown from "./components/About4";
import PartnersSection from "../components/Partner";
import CallToAction from "@/app/components/Home7";

export default function About() {
  return (
    <main>
      <AboutBMCCI />
      <OurHistory />
      <MissionSection />
      <SectionDown />
      <PartnersSection />
      <CallToAction />
    </main>
  );
}
