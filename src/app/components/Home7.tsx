import Image from 'next/image';

export default function CallToAction() {
  return (
    <section className="py-15 flex justify-center mt-10">
      <div className="relative w-full max-w-7xl rounded-lg overflow-hidden">
        <Image 
          src="/Container (2).png" 
          alt="Call to Action" 
          width={1200} 
          height={500} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-white text-3xl md:text-5xl font-bold">
            Ready to Make a Difference?
          </h2>
          <p className="text-white mt-10 max-w-2xl">
            We aim to prevent and eradicate poverty from its root in Nigeria, <br />
            particularly in Northern Nigeria.
          </p>
          <button className="bg-green-700 text-white text-2xl px-20 py-7 mt-10 rounded-full hover:bg-green-800 transition flex items-center">
            Donate Here →
          </button>
        </div>
      </div>
    </section>
  );
}
