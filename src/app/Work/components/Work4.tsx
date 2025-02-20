import Image from "next/image";

export default function BusinessEnterpriseDev() {
  return (
    <section>
          <div className="flex flex-col md:flex-row items-center justify-between bg-white mt-1 mx-auto">
            {/* Left Side: Image */}
            <div className="w-full w-1/3">
              <Image
                src="/Image Placeholder (7).png" // Replace with your actual image path
                alt="Business/Enterprise Development"
                width={774}
                height={740}
              />
            </div>

            {/* Right Side: Content */}
            <div className="w-full md:w-2/3 md:pl-10 mt-8 md:mt-0">
              <h2 className="text-3xl md:text-5xl font-bold text-green-700">
              Business/Enterprise<br /> 
              Development
              </h2>
              <p className="text-gray-700 text-2xl mt-8 leading-relaxed">
                      Through our Non-Interest Loan Scheme and Value <br />
                      Chain Enterprise Development for Women Farmers, we <br />
                      empower women to achieve economic independence, <br />
                      support their families, and break the cycle of poverty <br />
                      in their communities.<br />
              </p>

              {/* Button with Link */}
              <div className="mt-10">
                <a
                  href="https://www.enterpriseInitiatives.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-600 text-white px-6 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition flex items-center w-fit"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
          <div className="mb-8">
              <Image
                src="/Content Cards V8.png"
                alt="Image Container"
                width={1440} // Set width to match full screen width
                height={1488}  // Adjust height as needed
                className="w-full h-auto rounded-lg"
              />
          </div>
    </section>
  );
}
