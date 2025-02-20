import Image from 'next/image';

export default function Gallery() {
  return (
    <section className="text-center py-12">
      <h2 className="text-5xl font-bold">
        <span className="text-green-700">Our</span> <span className="text-green-100">Gallery</span>
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mt-10">
        Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.
      </p>
      <button className="bg-orange-600 text-white text-2xl px-20 py-6 mt-6 rounded-full hover:bg-orange-600 transition flex items-center mx-auto">
        View All →
      </button>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        <div className="rounded-lg overflow-hidden">
          <Image src="/Image Placeholder.png" 
          alt="Gallery Image 1" 
          width={441} 
          height={568} 
          className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden">
          <Image src="/Image Placeholder (1).png" 
          alt="Gallery Image 2" 
          width={441} 
          height={568} 
          className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden">
          <Image src="/Image Placeholder (2).png" 
          alt="Gallery Image 3" 
          width={441} 
          height={568} 
          className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
