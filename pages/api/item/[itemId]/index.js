// pages/api/item/[itemId].js
import prisma from "../../../../prisma/prisma";

export default async function handler(req, res) {
  const { itemId } = req.query;

  if (req.method === "GET") {
    try {
      const item = await prisma.item.findUnique({
        where: {
          id: itemId,
        },
      });
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve item" });
    }
  } else if (req.method === "POST") {
    const { name, description } = req.body;
    try {
      const newItem = await prisma.item.create({
        data: {
          name,
          description,
        },
      });
      res.status(201).json(newItem);
    } catch (error) {
      res.status(500).json({ error: "Failed to create item" });
    }
  } else if (req.method === "PUT") {
    const { name, description } = req.body;

    try {
      const updatedItem = await prisma.item.update({
        where: {
          id: itemId,
        },
        data: {
          name,
          description,
        },
      });
      res.status(200).json(updatedItem);
    } catch (error) {
      res.status(500).json({ error: "Failed to update item" });
    }
  } else if (req.method === "DELETE") {
    try {
      const deletedItem = await prisma.item.delete({
        where: {
          id: itemId,
        },
      });
      res.status(200).json(deletedItem);
    } catch (error) {
      res.status(500).json({ error: "Failed to delete item" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
