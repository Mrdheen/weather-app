export default function HeroPart() {
    return (
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Container (5).png')" }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black-100 bg-opacity-50"></div>
  
        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-left justify-center h-full text-left text-white px-6">
          <h1 className="text-4xl md:text-7xl font-bold">
          Together for <br />
          Sustainable Change
          </h1>
          <br />
          <p className="mt-4 text-lg md:text-2xl max-w-3xl">
                At BMCCI, we believe in the power of collaboration. By partnering <br />
                with us, you join a network of passionate individuals, organizations, <br />
                and corporations committed to transforming lives and creating <br />
                lasting impact across Nigeria. 
          </p>
          <br />
          {/* Buttons */}
          <div className="mt-6 flex flex-row space-x-4">
            <a href="#" className="bg-orange-500 text-white px-10 py-5 rounded-full text-[20px] font-semibold hover:bg-orange-600 transition">
              Join Us →
            </a>
            <a href="#" className="bg-gray-100 text-green-500 px-10 py-5 rounded-full text-[20px] font-semibold hover:bg-gray-300 transition">
             Contact Us 
            </a>
          </div>
        </div>
      </div>
    );
  }
  