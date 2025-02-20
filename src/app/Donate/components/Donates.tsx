import Image from "next/image";

export default function SectionDownDon() {
    return (
      <div className="w-full flex flex-col">
        <div className="mb-8">
          <Image
            src="/Content Sections V8 (6).png"
            alt="Image Container"
            width={1440} // Set width to match full screen width
            height={650}  // Adjust height as needed
            className="w-full h-auto"
          />
        </div>
        <div className="mb-8">
          <Image
            src="/Content Cards V8 (1.png"
            alt="Image Container"
            width={1440} // Set width to match full screen width
            height={918}  // Adjust height as needed
            className="w-full h-auto"
          />
        </div>
        <div className="mb-8">
          <Image
            src="/Stats V1.png"
            alt="Image Container"
            width={1440} // Set width to match full screen width
            height={526}  // Adjust height as needed
            className="w-full h-auto"
          />
        </div>
      </div>
    );
  }
  