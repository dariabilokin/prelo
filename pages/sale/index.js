import Link from "next/link";
import fetchSales from "../../lib/fetchSales";
import Layout from "../../components/shared/Layout/Layout";
const Sale = ({ sales }) => {
  console.log("sales ", sales);
  return (
    <>
      <div className="container">
        <h3>New Sale is coming!</h3>
        <div className="p-20 m-30"></div>

        <div className="grid grid-cols-3 gap-4">
          {sales &&
            sales?.map((sale) => (
              <Link key={sale.id} href={`/sale/${sale.id}`}>
                <div className="p-4 bg-gray-200">
                  <h4 className="text-xl font-bold">{sale.name}</h4>
                  <p>{sale.description}</p>
                  <span className="text-gray-500">Price: {sale.price}</span>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const sales = await fetchSales();
    // const test = await prisma.sale.create({
    //   data: {
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //     name: "Test sale",
    //     userId: "6479458e0a90ac16dba925d4",
    //   },
    // });
    return {
      props: {
        sales,
      },
    };
  } catch (error) {
    return {
      props: {
        error: "Failed to fetch sales",
      },
    };
  }
};

Sale.getLayout = (page) => {
  return (
    <Layout meta={{ title: "Sale", description: "All sales page" }}>
      {page}
    </Layout>
  );
};
export default Sale;
