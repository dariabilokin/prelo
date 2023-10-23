import AddNewItem from "../../addItem";
import prisma from "../../../prisma/prisma";
import { getAllItems } from "../../../lib/item";
import Layout from "../../../components/shared/Layout/Layout";
import Card from "../../../components/ui/Card/Card";

const NewSale = ({ sale, items }) => {
  console.log("itemsList", Object.values(items));
  return (
    <>
      <div className="container pb-10">
        <div className="p-20 m-30">
          <AddNewItem saleId={sale.id} />
        </div>
        <div className=" px-7 sm:px-10 md:px-20">
          <div className="flex flex-row flex-wrap items-center content-center justify-center flex-auto gap-5 md:gap-10 ">
            {items &&
              Object.values(items)?.map((item) => (
                <Card item={item} key={item.id} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { saleId } = params;
  try {
    const items = await getAllItems();

    const updatedItems = items.map((item) => ({
      ...item,
      updatedAt: item.updatedAt.toString(),
      createdAt: item.createdAt.toString(),
    }));

    const sale = await prisma.sale.findUnique({
      where: { id: saleId },
    });
    const updatedSale = {
      ...sale,
      updatedAt: sale.updatedAt.toString(),
      createdAt: sale.createdAt.toString(),
    };
    if (!updatedSale) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        items: updatedItems,
        sale: updatedSale,
      },
    };
  } catch (error) {
    return {
      props: {
        error: "Failed to fetch sale",
      },
    };
  }
};

NewSale.getLayout = (page) => {
  return (
    <Layout
      style="bg-neutral-100"
      meta={{ title: "NewSale", description: "NewSale page" }}
    >
      {page}
    </Layout>
  );
};
export default NewSale;
