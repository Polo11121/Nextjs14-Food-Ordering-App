import { Button } from "@/components/ui";
import Image from "next/image";

type MenuItemProps = {
  image: string;
  title: string;
  description: string;
};

export const MenuItem = ({ image, title, description }: MenuItemProps) => (
  <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all cursor-pointer">
    <Image
      src={image}
      alt={`${title}-image`}
      width={100}
      height={100}
      className="mx-auto"
    />
    <h4 className="font-semibold my-3 text-xl">{title}</h4>
    <p className="text-gray-500 text-sm mb-4">{description}</p>
    <Button variant="red">Add to cart</Button>
  </div>
);
