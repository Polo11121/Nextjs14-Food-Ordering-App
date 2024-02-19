import { MenuItem, SectionHeaders } from "@/components/ui";
import Image from "next/image";

const MENU_ITEMS = [
  {
    title: "Pizza",
    description:
      "Pizza is the missing piece that makes everyday complete, a simple yet delicious joy in life",
    image: "/pizza.png",
  },
  {
    title: "Pizza",
    description:
      "Pizza is the missing piece that makes everyday complete, a simple yet delicious joy in life",
    image: "/pizza.png",
  },
  {
    title: "Pizza",
    description:
      "Pizza is the missing piece that makes everyday complete, a simple yet delicious joy in life",
    image: "/pizza.png",
  },
  {
    title: "Pizza",
    description:
      "Pizza is the missing piece that makes everyday complete, a simple yet delicious joy in life",
    image: "/pizza.png",
  },
];

export const HomeMenu = () => (
  <section>
    <div className="relative">
      <div className="absolute -left-4 -top-[50px] -z-10">
        <Image src={"/sallad1.png"} width={109} height={189} alt={"sallad"} />
      </div>
      <div className="absolute -top-[100px] -right-4 -z-10">
        <Image src={"/sallad2.png"} width={107} height={195} alt={"sallad"} />
      </div>
    </div>
    <SectionHeaders header="check out" subHeader="menu" className="mb-4" />
    <div className="grid grid-cols-3 gap-4">
      {MENU_ITEMS.map((item, index) => (
        <MenuItem
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  </section>
);
