export default function HeroWca() {
    return (
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Image Container (1).png')" }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black-100 bg-opacity-50"></div>
  
        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-left justify-center h-full text-left text-white px-6">
          <h1 className="text-4xl md:text-7xl font-bold">
            Women community in Africa <br />(WCA)
          </h1>
          <br />
          <p className="mt-4 text-lg md:text-2xl max-w-3xl">
            Welcome to Women Community in Africa (WCA), where advocacy <br />
            meets action. Together, we identify and address barriers to the <br />
            sustainable development of African women and children, ensuring <br />
            no voice is left unheard.
          </p>
          <br />
          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <a href="#" className="bg-orange-500 text-white px-10 py-5 rounded-full text-[20px] font-semibold hover:bg-orange-600 transition">
              Join Us →
            </a>
          </div>
        </div>
      </div>
    );
  }
  