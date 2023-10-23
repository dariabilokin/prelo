import React from "react";

import { getAllItems } from "../../../lib/item";


export const getServerSideProps = async ({ req }) => {
  return { props: {} };
};

const ItemCard = ({ item }) => {
  return (
    <div className="flex flex-col items-start bg-white rounded-2xl">
      <h3 className="text-3xl "> Item Name </h3>
    </div>
  );
};

export default ItemCard;
