import Image from "next/image";
export default function PartnersSection() {
    return (
      <section className="max-w-6xl mx-auto py-16">
        <div className="md:flex md:items-center md:justify-between">
          {/* Left Side - Title & Text */}
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold text-green-700">Our Partners</h2>
            <p className="text-gray-700 mt-10">
              Our customers accomplish amazing things every day. They work to find cures to cancer, travel
              to space, build tomorrow&apos;s innovations, and beyond.
            </p>
            <a href="#" className="text-orange-600 font-semibold flex items-center mt-4">
              Join Us <span className="ml-2">›</span>
            </a>
          </div>
  
          {/* Right Side - Logos */}
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
              <Image 
              src="/Logos Container.png" // Replace with your actual image path
            alt="Our Partners"
            width={578}
            height={243}
            className="w-full max-w-lg object-contain"
              />
          </div>
        </div>
      </section>
    );
  }
  