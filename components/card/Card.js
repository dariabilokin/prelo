import Image from "next/image";

const Card = ({ item }) => {
  return (
    <div className="flex flex-col items-start bg-neutral rounded-2xl shadow-lg">
      <Image
        src="http://source.unsplash.com/bpg-ngqrPc8"
        alt={`Image of ${item.name}`}
        width={300}
        height={300}
        className="w-full h-full top-0 left-0 object-cover rounded-t-2xl "
      />
      <div className="m-3">
        <h3 className="text-xl md:text-3xl text-gray-700">{item.name}</h3>
        <h3 className="text-md md:text-xl font-small text-gray-700">
          ${item.price}
        </h3>
      </div>
    </div>
  );
};

export default Card;
