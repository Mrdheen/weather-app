import Image from "next/image";

export default function WCASummit2() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white mx-auto p-10">
      {/* left side: Content */}
      <div className="w-full p-5 md:pl-10 mt-8 md:mt-0">
        <h2 className="text-3xl md:text-5xl font-bold text-green-700">
          WCA Annual Summits
        </h2>
        <p className="text-gray-700 text-2xl mt-8 leading-relaxed">
          Each year, the Women Community in Africa (WCA). <br />
          A coalition of NGOs, CSOs, and like-minded individuals 
          and stakeholders gather in an annual<br /> summit to “chart a 
          legacy of solutions for African<br /> families,” aiming to 
          drive impactful social change<br /> and address Africa’s most
          pressing challenges.
        </p>
        {/* Button with Link */}
        <div className="mt-10">
          <a
            href="https://www.wcaannual.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 text-white px-6 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition flex items-center w-fit"
          >
            Learn More →
          </a>
        </div>
      </div>
        {/* Right Side: Image */}
        <div className="w-full w-1/2">
        <Image
          src="/Image Placeholder (8).png" // Replace with your actual image path
          alt="WCA Annual Summit"
          width={774}
          height={740}
        />
      </div>
    </section>
  );
}
