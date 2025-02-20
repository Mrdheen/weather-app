import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Logo & Copyright */}
        <div className="text-center md:text-left">
          <Image src="/BMCCI logo 1.png" alt="BMCCI Logo" width={150} height={80} />
          <p className="text-green-600 mt-10">Copyright © 2024 BMCCI</p>
          <p className="text-green-600">All Rights Reserved</p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-bold">About Us</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Our Mission</li>
              <li>Our Story</li>
              <li>Leadership Team</li>
              <li>Our Impact</li>
              <li>FAQs</li>
              <li>Events</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Programs</h3>
            <ul className="text-gray-600 space-y-2">
              <li>(R2R) Club</li>
              <li>WCA</li>
              <li>BDE</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Get Involved</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Donate</li>
              <li>Volunteer</li>
              <li>Partner with Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold">Follow us</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center">
                <FaFacebookF className="text-gray-500 hover:text-blue-600 cursor-pointer mr-2" size={20} />
                Facebook
              </li>
              <li className="flex items-center">
                <FaXTwitter className="text-gray-500 hover:text-blue-400 cursor-pointer mr-2" size={20} />
                X (formerly Twitter)
              </li>
              <li className="flex items-center">
                <FaInstagram className="text-gray-500 hover:text-pink-500 cursor-pointer mr-2" size={20} />
                Instagram
              </li>
              <li className="flex items-center">
                <FaLinkedinIn className="text-gray-500 hover:text-blue-700 cursor-pointer mr-2" size={20} />
                LinkedIn
              </li>
              <li className="flex items-center">
                <FaYoutube className="text-gray-500 hover:text-red-600 cursor-pointer mr-2" size={20} />
                YouTube
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}