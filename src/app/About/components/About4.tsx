import Image from "next/image";

export default function SectionDown() {
    return (
      <div className="w-full flex flex-col justify-center items-center mt-8">
        <div className="mb-8">
          <Image
            src="/Quote section.png"
            alt="Image Container"
            width={1440} // Set width to match full screen width
            height={742}  // Adjust height as needed
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="mb-8">
          <Image
            src="/Team Members V7.png"
            alt="Image Container"
            width={1440} // Set width to match full screen width
            height={1961}  // Adjust height as needed
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="mb-8">
          <Image
            src="/Stats V1.png"
            alt="Image Container"
            width={1440} // Set width to match full screen width
            height={526}  // Adjust height as needed
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    );
  }
  