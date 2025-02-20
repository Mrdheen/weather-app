import Image from "next/image";

export default function SectionDownWca2() {
    return (
      <div className="w-full flex flex-col">
        <div className="mb-8">
          <Image
            src="/Content Sections V11.png"
            alt="Image Container"
            width={1440} // Set width to match full screen width
            height={1961}  // Adjust height as needed
            className="w-full h-auto"
          />
        </div>
        <div className="mb-8">
          <Image
            src="/Stats V1 (2).png"
            alt="Image Container"
            width={1440} // Set width to match full screen width
            height={526}  // Adjust height as needed
            className="w-full h-auto"
          />
        </div>
        <div className="mb-8">
          <Image
            src="/Content Sections V8 (5).png"
            alt="Image Container"
            width={1440} // Set width to match full screen width
            height={526}  // Adjust height as needed
            className="w-full h-auto"
          />
        </div>
        <div className="mb-8">
          <Image
            src="/Content Sections V19 (1).png"
            alt="Image Container"
            width={1440} // Set width to match full screen width
            height={526}  // Adjust height as needed
            className="w-full h-auto"
          />
        </div>
        <div className="mb-8">
          <Image
            src="/Team Members V5.png"
            alt="Image Container"
            width={1440} // Set width to match full screen width
            height={526}  // Adjust height as needed
            className="w-full h-auto"
          />
        </div>
      </div>
    );
  }
  