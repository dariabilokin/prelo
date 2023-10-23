// /prisma/user.js
import prisma from "../prisma/prisma";
// READ
export const getAllUsers = async () => {
  const users = await prisma.user.findMany({});
  return users;
};

export const getUser = async (id) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
};

// CREATE
export const createUser = async (email, name) => {
  const user = await prisma.user.create({
    data: {
      email,
      name,
      role,
      type,
    },
  });
  return user;
};

// UPDATE
export const updateUser = async (id, updateData) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      ...updateData,
    },
  });
  return user;
};

// DELETE
export const deleteUser = async (id) => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
};
