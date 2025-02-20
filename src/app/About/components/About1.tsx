import Image from "next/image";

export default function AboutBMCCI() {
  return (
    <section>
        <div className="flex flex-row items-center justify-between h-screen bg-white p-8">
          <div className="flex flex-col items-start max-w-lg">
            <h1 className="text-green-700 text-6xl font-bold leading-tight">
              About Beyond Mentors<br />
              Community Care
              Initiatives (BMCCI)
            </h1>
            <p className="mt-8 text-gray-700 text-2xl">
                BMCCI is a non-profit organization committed to transforming lives 
                in Nigeria by empowering communities socially, economically, and 
                educationally to break the cycle of poverty, with a focus on Northern 
                Nigeria
            </p>
            <button className="mt-10 bg-orange-500 text-white text-2xl px-10 py-4 rounded-full flex items-center gap-2 hover:bg-orange-600 transition">
              Join Us <span>→</span>
            </button>
          </div>
          <div className="w-2/3">
            <Image src="/Content.png" alt="BMCCI Community" width={1216} height={488} className="w-full rounded-lg" />
          </div>
        </div>
          {/* Logos Section */}
      <div className="mt-12 flex flex-wrap justify-center gap-8">
        <Image src="/Frame 2087325093.png" alt="Search Inwards" width={1081} height={106} />
      </div>
    </section>
  );
}
