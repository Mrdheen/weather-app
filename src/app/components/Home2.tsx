import Image from "next/image";

export default function Intervention() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 text-center md:text-left">
      <h2 className="text-green-700 text-5xl font-bold text-center">Interventions</h2>
      <p className="text-gray-600 mt-2 text-center">BMCCI&apos;s support for vulnerable communities</p>
      <br />
      
      {/* First Row */}
      <div className="mt-10 flex flex-col md:flex-row items-center md:items-center gap-8">
        <div className="md:w-1/2">
          <p className="text-gray-700">
             At BMCCI, we believe in uplifting the most vulnerable members of<br />
             our society—widows and orphans—by addressing their immediate <br />
              needs and empowering them for a sustainable future.
          </p>
          <p className="text-gray-700 mt-4">
             Our intervention program focuses on providing essential food <br />
             supplies to ensure no one goes hungry. We recognize that widows <br />
              and orphans often face economic hardships, so we also support <br />
               their aspirations by offering financial literacy training. This equips <br />
             them with the skills to effectively manage resources and grow<br />
              their small businesses.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/Container.png" 
            alt="Children running"
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      
      {/* Second Row */}
      <div className="mt-10 flex flex-col md:flex-row items-center md:items-center gap-8">
        <div className="md:w-1/2">
          <Image
            src="/Container (1).png" 
            alt="Women receiving aid"
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-gray-700">
             Additionally, BMCCI extends non-interest loans and small<br />
             stipends to kickstart or scale their enterprises, enabling financial<br />
              independence and long-term stability. By bridging the gap<br />
               between immediate relief and economic empowerment, BMCCI is<br />
                fostering resilience and hope within our communities.
          </p>
          <p className="text-gray-700 mt-4">
            Together, we are creating pathways to a brighter and more inclusive future for all.
          </p>
        </div>
      </div>
    </section>
  );
}
