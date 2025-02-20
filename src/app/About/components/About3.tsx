import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="mt-10 px-8 md:px-16 lg:px-32 py-16">
      {/* Header Section with Buttons */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-700">
            Mission, Vision,<br />
             and Values
          </h2>
          <p className="text-gray-500 mt-8 text-[20px]"> 
            Lorem ipsum dolor sit amet consectetur adipiscing elit<br />
             semper dalar elementum tempus hac tellus libero
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex space-x-4">
          <button className="p-3 rounded-full border border-gray-300 hover:bg-gray-200 transition">
            <ChevronLeft className="w-12 h-12 text-gray-600" />
          </button>
          <button className="p-3 rounded-full bg-green-700 text-white hover:bg-green-800 transition">
            <ChevronRight className="w-12 h-12" />
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-[30px]">
        {/* Left Side: Image */}
        <div className="rounded-lg w-full overflow-hidden">
          <Image 
            src="/Image Placeholder (4).png" 
            alt="Woman in face shield teaching" 
            width={620} 
            height={400} 
            className="rounded-lg object-cover w-full"
          />
        </div>

        {/* Right Side: Text Content */}
        <div>
          <h3 className="text-3xl font-semibold text-green-700">Our Mission</h3>
          <p className="text-gray-700 text-2xl mt-10 leading-relaxed">
            Our mission is to create pathways out of poverty by building conducive learning spaces, 
            promoting financial empowerment, and fostering community support networks. 
            Through innovative programs, we equip individuals and communities with the skills they need to thrive.
          </p>
        </div>
      </div>
    </section>
  );
}
