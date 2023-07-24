import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-secondaryDark font-bold text-xl">
              My App
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/home"
                  className="text-secondaryDark tracking-wider font-medium hover:secondary hover:underline px-3 py-2 rounded-md text-sm "
                >
                  Home
                </Link>
                <Link
                  href="/sale"
                  className="text-secondaryDark tracking-wider font-medium hover:secondary hover:underline px-3 py-2 rounded-md text-sm "
                >
                  Sale
                </Link>
                <Link
                  href="/contact"
                  className="text-secondaryDark tracking-wider font-medium hover:secondary hover:underline px-3 py-2 rounded-md text-sm "
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/login"
                className="ml-4 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
