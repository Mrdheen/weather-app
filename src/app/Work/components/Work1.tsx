import Image from "next/image";

export default function OurWork() {
  return (
    <section className="bg-white">
      <div className="flex flex-col items-center justify-center min-h-screen w-full text-center">
        <div className="max-w-4xl px-4">
          <h1 className="text-7xl font-bold text-green-700">
            Empowering Communities Through Targeted Programs
          </h1>
          <p className="text-gray-700 text-2xl mt-10 leading-relaxed">
            BMCCI&apos;s programs are designed to address the unique social, economic, and educational challenges facing
            communities across Northern Nigeria. From financial literacy for youth to empowering women through enterprise, 
            our initiatives foster long-term resilience and self-sufficiency.
          </p>
          <div className="mt-10">
            <a href="#" className="bg-orange-600 text-white px-12 py-6 rounded-full text-lg font-semibold hover:bg-orange-700 transition">
              Join Us →
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center">
          <Image 
            src="/Images.png" // Replace with your image path
            alt="Community Empowerment"
            width={2096} // Adjust dimensions as needed  
            height={460} // Adjust dimensions as needed
          />
        </div>
        <div className="mt-10 w-full flex justify-center">
          <Image 
            src="/Content Sections V8 (2).png" // Replace with your image path
            alt="Content"
            width={1440} // Adjust dimensions as needed  
            height={528} // Adjust dimensions as needed
          />
        </div>
      </div>
    </section>
  );
}

  
