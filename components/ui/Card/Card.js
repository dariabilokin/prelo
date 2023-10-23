import Image from "next/image";

const Card = ({ item }) => {
  const imgSrc =
    item.photoUrl.length > 0
      ? item.photoUrl[0]
      : "http://source.unsplash.com/bpg-ngqrPc8";
  return (
    <div className="flex flex-col items-start bg-white shadow-lg bg-neutral rounded-2xl">
      <Image
        src={imgSrc} //"http://source.unsplash.com/bpg-ngqrPc8"
        alt={`Image of ${item.name}`}
        width={250}
        height={150}
        className="object-cover h-[200px] rounded-t-2xl "
      />
      <div className="m-3 text-left">
        <h3 className="text-lg text-gray-700 md:text-xl">{item.name}</h3>
        {item.price && (
          <h3 className="text-gray-700 text-md md:text-lg font-small">
            ${item.price}
          </h3>
        )}
      </div>
    </div>
  );
};

export default Card;
