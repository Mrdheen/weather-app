import OurWork from "./components/Work1";
import WCASummit from "./components/Work2";
import RagsToRichies from "./components/Work3";
import BusinessEnterpriseDev from "./components/Work4";
import Gallery from "../components/Home5";
import Location from "./components/Works5";
import PartnersSection from "../components/Partner";
import CallToAction from "../components/Home7";

export default function About() {
  return (
    <main>
        <OurWork />
        <WCASummit />
        <RagsToRichies />
        <BusinessEnterpriseDev />
        <Gallery />
        <Location />
        <PartnersSection />
        <CallToAction />
    </main>
  );
}