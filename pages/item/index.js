import Image from "next/image";
import React from "react";
import Card from "../../components/card/Card";
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
      <div className="container bg-white py-20">
        <h1 className="text-5xl py-10 text-center font-bold text-danger mb-10">
          Items
        </h1>

        <div className="px-7 sm:px-10 md:px-20">
          <div className="flex flex-auto flex-row flex-wrap content-center items-center justify-center sm:gap-5 md:gap-20 xl:gap-30x gap-3">
            {itemsList.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
