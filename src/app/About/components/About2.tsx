import Image from "next/image";

export default function OurHistory() {
  return (
    <section className="mt-10 px-8 md:px-16 lg:px-32 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left Side: Heading and Large Image */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-6xl font-bold text-green-700">Our History</h2>
          <br /><br /><br /><br /><br /><br /><br />
          <Image 
            src="/Image Placeholder (3).png" 
            alt="Child playing with string" 
            width={620} 
            height={652} 
            className="mt-10 object-cover w-full"
          />
        </div>

        {/* Right Side: Text Content and Second Image */}
        <div className="flex flex-col space-y-6">
          <p className="text-gray-700 text-[20px] leading-relaxed mt-3">
             BMCCI was founded in 2007 with a vision to uplift marginalized<br />
             communities by addressing poverty’s root causes. Registered as<br />
              a social enterprise in 2013 and an NGO in 2017, BMCCI has since<br />
               grown into a vital force for change in Nigeria. Today, it <br />
               empowers women, children, and youth through programs focused <br />
               on financial literacy, business opportunities, and education,<br /> 
            fostering resilience and sustainable development across communities.
          </p>
          <br /><br /><br /><br /><br /><br />
          <Image 
            src="/Container (4).png" 
            alt="Woman carrying bucket" 
            width={620} 
            height={652} 
            className=" object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
}
