import Image from "next/image";
import Link from "next/link";

const ItemServiceCard = ({ className, item }) => {
  const { name, image } = item;
  return (
    <Link
      href={`service-booking/${name}`}
      className="bg-white h-[130px] flex justify-center items-center"
    >
      <div className="flex gap-3 px-4  flex-col items-center ">
        <Image
          src={image}
          height={40}
          width={40}
          alt={`${name} image`}
          quality={95}
          priority
          className="object-cover"
        />

        <h5 className="text-black font-bold text-center  ">{name}</h5>
      </div>
    </Link>
  );
};

export default ItemServiceCard;
