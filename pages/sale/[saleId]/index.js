import AddNewItem from "../../addItem";
import prisma from "../../../prisma/prisma";
import Navigation from "../../../components/navigation/Navigation";
import Card from "../../../components/card/Card";
const NewSale = ({ sale, itemsList }) => {
  return (
    <>
      <Navigation />
      <div className="container">
        <div className="m-30 p-20">
          <AddNewItem />
        </div>
        <div className="px-7 sm:px-10 md:px-20">
          <div className="flex flex-auto flex-row flex-wrap content-center items-center justify-center sm:gap-5 md:gap-20 xl:gap-30x gap-3">
            {itemsList &&
              itemsList?.map((item) => <Card item={item} key={item.id} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { saleId } = query;

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

export default NewSale;
