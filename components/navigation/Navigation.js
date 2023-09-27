import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";


const Navigation = () => {
  const { register, handleSubmit, reset } = useForm();
  return (
    <nav className="bg-white ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-secondaryDark font-bold text-xl">
              <Image
                src="/images/icon.png"
                alt="Prelo Logo"
                width={100}
                height={50}
                className=""
              />
            </Link>
          </div>
          <form>
            <div className="flex  items-center  font-light">
              <span className="bg-gray-200 border-2  border-gray rounded-l-md">
                <select className="bg-gray-200 px-4 py-3 h-full w-full border-none focus:outline-none">
                  <option value="">All Categories</option>
                  <option value="category1">Category 1</option>
                  <option value="category2">Category 2</option>
                  <option value="category3">Category 3</option>
                </select>
              </span>
              <div className="flex flex-shrink-1">
                <input
                  type="text"
                  className="text-lg p-3 h-full w-full border-2 border-gray focus:outline-none"
                  placeholder="What are you looking for?"
                />
              </div>
              <div className="">
                <button className="bg-primary rounded-r-md text-white h-full w-full focus:outline-none p-3">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
          </form>
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
