import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChatBubbleLeftIcon,
  ShoppingCartIcon,
  UserIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { dynamicSort } from "../../../lib/helpers";
import { Bars3Icon } from "@heroicons/react/20/solid";

const HeaderBar = () => {
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
    <div className="sticky top-0 left-0 z-50">
      <header className="pt-3 pb-2 bg-white">
        <div className="flex items-center justify-between h-16 ml-10">
          {/* <Bars3Icon className="w-6 h-6 text-black" /> */}
          <div className="mr-5">
            <Link href="/" className="text-2xl font-bold text-secondaryDark">
              <Image
                src="/images/icon.png"
                alt="Prelo Logo"
                width={120}
                height={100}
                className=""
              />
            </Link>
          </div>
          <div className="flex items-center justify-between flex-grow">
            <nav className="bg-white">
              <div className="flex items-baseline ml-10 mr-20 space-x-4">
                <Link
                  href="/"
                  className="px-3 py-2 text-lg font-medium tracking-wider text-black rounded-md cursor-pointer"
                >
                  Home
                </Link>
                <Link
                  href="/sale"
                  className="px-3 py-2 text-lg font-medium tracking-wider text-black rounded-md cursor-pointer"
                >
                  Sale
                </Link>
                <Link
                  href="/contact"
                  className="px-3 py-2 text-lg font-medium tracking-wider text-black rounded-md cursor-pointer"
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className="px-3 py-2 ml-4 text-lg font-medium text-black"
                >
                  Blog
                </Link>
              </div>
            </nav>

            <div className="flex items-center justify-end gap-3 mx-10 space-x-4">
              {/* <Link
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
              </Link> */}
              <Link href="/login" className="text-gray-300 cursor-pointer ">
                <div className="inline-flex items-center">
                  <UserIcon className="w-6 h-6 mr-2 text-black" />
                  <span className="text-lg font-medium align-baseline">
                    Login
                  </span>
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
      </header>
    </div>
  );
};

export default HeaderBar;
