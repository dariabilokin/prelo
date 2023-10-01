import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import {
  ChatBubbleLeftIcon,
  ShoppingCartIcon,
  UserIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { dynamicSort } from "../../lib/helpers";
import { clsx } from "clsx";

const HeaderBar = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const categoryOptions = [
    { name: "apparel", label: "Apparel", value: "apparel" },
    { name: "kitchen", label: "Kitchen", value: "kitchen" },
    { name: "books", label: "Books", value: "books" },
    { name: "tools", label: "Tools", value: "tools" },
    { name: "cameras", label: "Cameras", value: "cameras" },
    { name: "homeDecor", label: "Home Decor", value: "homeDecor" },
    { name: "textiles", label: "Textiles", value: "textiles" },
    { name: "outdoor", label: "Outdoor", value: "outdoor" },
  ];
  console.log("sort ", categoryOptions.sort(dynamicSort("name")));
  return (
    <nav className="bg-white">
      <div className="flex items-center justify-between mx-2 mt-5 mb-2 h-14">
        <div className="mr-5">
          <Link href="/" className="text-xl font-bold text-secondaryDark">
            <Image
              src="/images/icon.png"
              alt="Prelo Logo"
              width={100}
              height={50}
              className=""
            />
          </Link>
        </div>
        <div className="flex items-center justify-between flex-grow">
          <form className="flex items-center flex-grow">
            <div className="relative">
              <button
                className="inline-flex items-center w-full h-12 px-4 py-3 bg-gray-200 border-none rounded-l-md focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="text-sm leading-none ">All Categories</span>
                <ChevronDownIcon className="w-4 h-4 ml-2 text-gray-500" />
              </button>
              <div
                className={clsx({
                  "z-10 absolute flex flex-col w-40 mt-1 bg-white rounded-md shadow-lg": true,
                  "border-gray border rounded-md": isOpen,
                })}
              >
                {isOpen &&
                  categoryOptions
                    .sort(dynamicSort("name"))
                    .map((category, index) => {
                      return (
                        <a
                          className={
                            "flex items-center h-8 px-3 text-sm hover:bg-gray-200 hover:"
                          }
                          href="#"
                          key={category.name}
                        >
                          {category.label}
                        </a>
                      );
                    })}
              </div>
            </div>
            <div className="">
              <input
                type="text"
                className="h-12 p-3 text-lg font-light border-2 w-80 border-gray focus:outline-none"
                placeholder="What are you looking for?"
              />
            </div>
            <div>
              <button className="w-full h-12 p-3 text-white bg-primary rounded-r-md focus:outline-none">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </form>

          <div className="flex items-center justify-end gap-3 mx-10 space-x-4">
            <Link
              href="/messages"
              className="text-sm font-medium tracking-wider text-black rounded-md cursor-pointer"
            >
              <ChatBubbleLeftIcon className="w-6 h-6 text-black" />
            </Link>
            <Link
              href="/favorites"
              className="text-sm font-medium tracking-wider text-black rounded-md cursor-pointer"
            >
              <HeartIcon className="w-6 h-6 text-black" />
            </Link>
            <Link
              href="/login"
              className="text-gray-300 cursor-pointer "
            >
              <div className="inline-flex items-center">
                <UserIcon className="w-6 h-6 mr-2 text-black" />
                <span className="text-lg font-medium align-baseline">Login</span>
              </div>
            </Link>
            <Link
              href="/cart"
              className="text-sm font-medium tracking-wider text-black rounded-md cursor-pointer"
            >
              <ShoppingCartIcon className="w-6 h-6 text-black" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderBar;
