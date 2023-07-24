import Image from "next/image";
import React from "react";
import { getAllItems } from "../../lib/item";

export const getServerSideProps = async ({ req }) => {
  const items = await getAllItems();

  return { props: { users: updatedUsers } };
};

const ItemCard = ({ item }) => {
  return (
    <div className="flex flex-col items-start bg-white rounded-2xl">
      <h3 className="text-3xl "> Item Name </h3>
    </div>
  );
};

export default ItemCard;
