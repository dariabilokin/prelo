import Link from "next/link";
import Navigation from "../../components/navigation/Navigation";
import fetchSales from "../../lib/fetchSales";
const Sale = ({ sales }) => {
  console.log("sales", sales);
  return (
    <>
      <Navigation />

      <div className="container">
        <h3>New Sale is coming!</h3>
        <div className="m-30 p-20"></div>

        <div className="grid grid-cols-3 gap-4">
          {sales &&
            sales?.map((sale) => (
              <Link key={sale.id} href={`/sale/${sale.id}`}>
                <div className="bg-gray-200 p-4">
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

export default Sale;
