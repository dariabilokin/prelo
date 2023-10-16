import prisma from "../../../prisma/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const item = await prisma.item.findMany();
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve item" });
    }
  } else if (req.method === "POST") {
    const { name, description } = req.body;
    try {
      const newItem = await prisma.item.create({ data: JSON.parse(req.body) });
      res.status(201).json(newItem);
    } catch (error) {
      res.status(500).json({ error: "Failed to create item" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
