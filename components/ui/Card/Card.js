import Image from "next/image";

const Card = ({ item }) => {
  console.log(item.imgUrl);
  return (
    <div className="flex flex-col items-start shadow-lg bg-neutral rounded-2xl">
      <Image
        src={item.imgUrl ?? "http://source.unsplash.com/bpg-ngqrPc8"} //"http://source.unsplash.com/bpg-ngqrPc8"
        alt={`Image of ${item.name}`}
        width={300}
        height={300}
        quality={75}
        className="top-0 left-0 object-cover w-full h-full rounded-t-2xl "
      />
      <div className="m-3 text-center">
        <h3 className="text-xl text-gray-700 md:text-3xl">{item.name}</h3>
        {item.price && (
          <h3 className="text-gray-700 text-md md:text-xl font-small">
            ${item.price}
          </h3>
        )}
      </div>
    </div>
  );
};

export default Card;
