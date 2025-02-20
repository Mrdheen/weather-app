import Image from "next/image";

export default function RagsToRichies() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white mt-1 mx-auto">
      {/* Left Side: Image */}
      <div className="w-full w-1/3">
        <Image
          src="/Image Placeholder (6).png" // Replace with your actual image path
          alt="RAGS TO RICHIES"
          width={774}
          height={740}
        />
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-2/3 md:pl-10 mt-8 md:mt-0">
        <h2 className="text-3xl md:text-5xl font-bold text-green-700">
        RAGS TO RICHES <br />
        (R2R) Club
        </h2>
        <p className="text-gray-700 text-2xl mt-8 leading-relaxed">
            The club operates in both public and private schools, <br />
            aiming to provide education, entrepreneurship skills, <br />
            and social reorientation for young Nigerians. Its focus <br />
            includes nurturing children in leadership, patriotism,<br /> 
            financial literacy, entrepreneurship, health and <br />
            sanitation from an early age.<br />
        </p>

        {/* Button with Link */}
        <div className="mt-10">
          <a
            href="https://www.rag2riches.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 text-white px-6 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition flex items-center w-fit"
          >
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
}
