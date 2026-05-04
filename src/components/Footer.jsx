import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white px-6 py-10">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-300">Email: sun@mart.com</p>
            <p className="text-gray-300">Phone: +880 1786 857496</p>
            <p className="text-gray-300">
              Address: 39, Malibagh Chowdhury Para, Malibagh, 1219
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Social Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="#" className="text-gray-300 hover:text-white">
                Facebook
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Instagram
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                LinkedIn
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Twitter/X
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <Link
              href="#"
              className="text-gray-300 hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          © 2026 SUM MART. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
