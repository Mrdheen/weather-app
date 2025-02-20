import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
        <Image src="/BMCCI logo 1.png" alt="BMCCI Logo" width={120} height={120} />
        </Link>
        <ul className="flex space-x-12 text-2xl">
                <li>
            <Link href="/" className="hover:text-green-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/About" className="hover:text-green-500">
              About Us
            </Link>
          </li>
          <li>
              <Link href="/Work" className="hover:text-green-500 flex items-center space-x-1">
                <span>Our Work</span>
                <ChevronDown className="w-8 h-8" />
              </Link>
          </li>
          <li>
            <Link href="/WCA" className="hover:text-green-500">
              WCA
            </Link>
          </li>
          <li>
            <Link href="/Partners" className="hover:text-green-500">
              Partners
            </Link>
          </li>
          <li>
            <Link href="/Blog" className="hover:text-green-500">
              Blog
            </Link>
          </li>
</ul>
        <Link href="/Donate" className="bg-green-700 text-white text-2xl px-6 py-3 rounded-full hover:bg-green-800">Donate</Link>
      </div>
    </nav>
  );
};

