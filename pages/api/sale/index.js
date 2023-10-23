import fetchSales from "../../../lib/fetchSales";
const handler = async (req, res) => {
  //   try {
  console.log("req", req);
  // Fetch all sales from the database
  const sales = await fetchSales();
  console.log("request sales", sales);
  res.status(200).json(sales);
  //   } catch (error) {
  //     res.status(500).json({ error: "Failed to fetch sales" });
  //   }
};

export default handler;
