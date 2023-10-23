import prisma from "../prisma/prisma";

const fetchSales = async (req, res) => {
  //   try {
  const sales = await prisma.sale.findMany();
  const updatedSales = sales.map((sale) => ({
    ...sale,
    updatedAt: sale.updatedAt.toString(),
    createdAt: sale.createdAt.toString(),
  }));
  // res.status(200).json(sales);
  return updatedSales;
  //   } catch (error) {
  //     return { error: "Failed to fetch sales" };
  //   }
};
export default fetchSales;
