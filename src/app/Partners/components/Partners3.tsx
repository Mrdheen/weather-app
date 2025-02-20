import Image from "next/image";

export default function SectionDownPart2() {
    return (
      <div className="w-full flex flex-col mt-8">
       <div className="mb-8">
          <Image
            src="/Stats V1.png"
            alt="Image Container"
            width={1440} // Set width to match full screen width
            height={526}  // Adjust height as needed
            className="w-full h-auto"
          />
        </div>
        <div className="mb-8">
          <Image
            src="/Wrapper.png"
            alt="Image Container"
            width={1440} // Set width to match full screen width
            height={1961}  // Adjust height as needed
            className="w-full h-auto"
          />
        </div>
      </div>
    );
  }
  