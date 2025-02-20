export default function Content() {
    return (
      <section className="flex items-center justify-between px-10 md:px-20 py-16">
        {/* Left Side - Title & Button */}
        <div className="w-1/3">
          <h2 className="text-5xl md:text-5xl font-bold text-green-700">About Us</h2>
          <br />
          <a href="#" className="mt-20 inline-flex items-center bg-orange-500 text-white px-12 py-6 rounded-full text-lg font-semibold hover:bg-orange-600 transition">
            Learn More →
          </a>
        </div>
  
        {/* Right Side - Description */}
        <div className="w-1/2 text-gray-800 text-lg leading-relaxed ml-40">
          <p>
            Founded in 2007, BMCCI is a non-profit organization dedicated to <br />
             tackling poverty at its source. With a focus on Northern Nigeria,<br />
              we empower communities through educational and economic support,<br />
               helping individuals and families to thrive. 
          </p>
          <p className="mt-4">
            Registered as a social enterprise in 2013 and as a non-governmental organization in 2017,<br />
             we’ve built a foundation rooted in community support, economic development,<br />
              and advocacy for marginalized groups.
          </p>
        </div>
      </section>
    );
  }
  