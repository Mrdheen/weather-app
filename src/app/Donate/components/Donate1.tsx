import Image from "next/image";

export default function Donate() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white mx-auto mt-10">
      {/* left side: Content */}
      <div className="w-full py-10 md:pl-10 mt-8 md:mt-0">
        <h2 className="text-3xl md:text-5xl font-bold text-green-700">
            Your Support <br />
            Transforms Lives
        </h2>
        <p className="text-gray-700 text-2xl mt-8 leading-relaxed">
            When you give to BMCCI, you’re empowering individuals and <br />
            communities to overcome poverty, access education, and build <br />
            sustainable futures. Join us in our mission to create a brighter,<br />
             more equitable Nigeria – every contribution counts.
        </p>
        {/* Button with Link */}
        <div className="mt-6 flex flex-row space-x-4">
            <a href="#" className="bg-orange-500 text-white px-10 py-5 rounded-full text-[20px] font-semibold hover:bg-orange-600 transition">
              Join Us →
            </a>
            <a href="#" className="bg-gray-100 text-green-500 px-10 py-5 rounded-full text-[20px] font-semibold hover:bg-gray-300 transition">
             Contact Us 
            </a>
          </div>
      </div>
        {/* Right Side: Image */}
        <div className="w-full w-1/2">
        <Image
          src="/Image Container (2).png" // Replace with your actual image path
          alt="Donate to BMCCI"
          width={671}
          height={715}
          className="w-full"
        />
      </div>
    </section>
  );
}
