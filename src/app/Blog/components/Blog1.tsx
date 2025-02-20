export default function BlogHero() {
    return (
      <section className="flex flex-col items-center text-center py-20 px-4 mt-5">
            <div className="max-w-4xl px-4">
              <h1 className="text-green-700 text-5xl font-bold">
                Stories of Impact and<br />
                Inspiration
              </h1>
              <p className="text-gray-700 text-2xl max-w-2xl mt-8">
                Welcome to the BMCCI Blog – your source for the latest updates, stories, and insights into our work across Nigeria. 
                Here, we share inspiring stories from the field, showcase impactful events, and offer insights into the challenges 
                and triumphs of building resilient communities.
              </p>
              {/* Search Bar */}
              <div className="mt-8 w-full max-w-2xl">
                <div className="relative flex items-center bg-gray-100 rounded-full p-4">
                  <svg className="w-6 h-6 text-gray-500 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35"></path>
                    <circle cx="10" cy="10" r="7"></circle>
                  </svg>
                  <input 
                    type="text"
                    className="bg-transparent outline-none w-full pl-4 text-lg text-gray-600"
                    placeholder="Search for..."
                  />
                </div>
              </div>
            </div>
      </section>
    );
  }
  