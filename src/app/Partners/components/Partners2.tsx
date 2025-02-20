import Image from "next/image";

export default function SectionDownPart() {
    return (
      <div className="w-full flex flex-col mt-8">
        <div className="mb-8">
          <Image
            src="/Content Cards V12.png"
            alt="Image Container"
            width={1440} // Set width to match full screen width
            height={1522}  // Adjust height as needed
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="mb-8">
          <Image
            src="/Team Members V15.png"
            alt="Image Container"
            width={1440} // Set width to match full screen width
            height={1404}  // Adjust height as needed
            className="w-full h-auto"
          />
        </div>
        <div className="mb-8">
          <Image
            src="/Frame 2087325083.png"
            alt="Image Container"
            width={1440} // Set width to match full screen width
            height={775}  // Adjust height as needed
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    );
  }
  