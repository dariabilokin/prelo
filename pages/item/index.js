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
  console.log("updated items", items);
  return { props: { items: updatedItems } };
};

const Items = ({ items }) => {
  // const itemsList = [items[0], items[0], items[0], items[0], items[0]];
  // console.log("items list", itemsList);
  return (
    <>
      {/* <div className="container py-20 bg-white">
        <h1 className="py-10 mb-10 text-5xl font-bold text-center text-danger">
          Items
        </h1>

        <div className="px-7 sm:px-10 md:px-20">
          <div className="flex flex-row flex-wrap items-center content-center justify-center flex-auto gap-3 sm:gap-5 md:gap-20 xl:gap-30x">
            {itemsList.map((item, index) => (
              <Card item={item} key={index} />
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Items;
