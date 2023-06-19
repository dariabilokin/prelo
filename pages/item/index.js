import Image from "next/image";
import React from "react";
import { getAllItems } from "../../lib/item";
// import couchPic from "../public/images/couch.webp";

export const getServerSideProps = async ({ req }) => {
  const items = await getAllItems();

  const updatedItems = items.map((item) => ({
    ...item,
    updatedAt: item.updatedAt.toString(),
    createdAt: item.createdAt.toString(),
  }));
  return { props: { items: updatedItems } };
};

const Items = ({ items }) => {
  const itemsList = [items[0], items[0], items[0], items[0], items[0]];
  return (
    <>
      <div className="container bg-neutral py-20">
        <h1 className="text-5xl py-10 text-center font-bold text-danger">
          Items
        </h1>

        <div className="px-7 sm:px-10 md:px-20">
          <div className="grid md:grid-cols-3  grid-col-2 sm:gap-5 gap-2">
            {itemsList.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-start bg-white rounded-2xl"
              >
                <div className="">
                  <Image
                    src="http://source.unsplash.com/bpg-ngqrPc8"
                    alt="User profile picture"
                    width={300}
                    height={300}
                    className="w-full h-full top-0 left-0 object-cover rounded-t-2xl "
                  />
                </div>
                <div className="m-3">
                  <h3 className="text-xl md:text-3xl text-gray-700">
                    {item.name}
                  </h3>
                  <h3 className="text-md md:text-xl font-small text-gray-700">
                    ${item.price}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
