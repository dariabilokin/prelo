import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { dynamicSort } from "../../../lib/helpers";
import { clsx } from "clsx";

const Navigation = () => {
  // const { register, handleSubmit, reset } = useForm();
  // const [isOpen, setIsOpen] = useState(false);
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
      <div className="flex items-baseline ml-10 mr-20 space-x-4">
        <Link
          href="/home"
          className="px-3 py-2 text-sm font-medium tracking-wider rounded-md text-secondaryDark hover:secondary hover:underline "
        >
          Home
        </Link>
        <Link
          href="/sale"
          className="px-3 py-2 text-sm font-medium tracking-wider rounded-md text-secondaryDark hover:secondary hover:underline "
        >
          Sale
        </Link>
        <Link
          href="/contact"
          className="px-3 py-2 text-sm font-medium tracking-wider rounded-md text-secondaryDark hover:secondary hover:underline "
        >
          Contact
        </Link>
        <Link
          href="/login"
          className="px-3 py-2 ml-4 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Log In
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
