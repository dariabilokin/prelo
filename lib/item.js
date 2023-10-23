import prisma from "../prisma/prisma";
export const getAllItems = async () => {
  const items = await prisma.item.findMany({});
  return items;
};

export const getItem = async (id) => {
  const item = await prisma.item.findUnique({
    where: { id },
  });
  return item;
};

export const createItem = async (email, name) => {
  const item = await prisma.item.create({
    data: {
      email,
      name,
      role,
      type,
    },
  });
  return item;
};

export const updateItem = async (id, updateData) => {
  const item = await prisma.item.update({
    where: {
      id,
    },
    data: {
      ...updateData,
    },
  });
  return item;
};

export const deleteItem = async (id) => {
  const item = await prisma.item.delete({
    where: {
      id,
    },
  });
  return item;
};
