import Image from "next/image";

export default function Tree() {
  return (
    <div className="w-full flex justify-center items-center">
      <Image
        src="/Frame 2087325094.jpg"
        alt="Image Container"
        width={1920} // Set width to match full screen width
        height={600}  // Adjust height as needed
        className="w-full h-auto rounded-lg"
      />
    </div>
  );
}
