import Image from "next/image";

export default function SectionDownWca1() {
    return (
      <div className="w-full flex flex-col">
        <div className="mb-8">
          <Image
            src="/Content Sections V8 (4).png"
            alt="Image Container"
            width={1440} // Set width to match full screen width
            height={742}  // Adjust height as needed
            className="w-full h-auto"
          />
        </div>
      </div>
    );
  }
  