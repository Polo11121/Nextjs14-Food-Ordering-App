import Image from "next/image";
import { Button } from "@/components/ui";
import { ArrowRight } from "@/components/icons";

export const Hero = () => (
  <section className="grid grid-cols-hero">
    <div className=" py-12">
      <h1 className="text-4xl font-semibold">
        Everything
        <br /> is better
        <br /> with a&nbsp;
        <span className="text-primary">Pizza</span>
      </h1>
      <p className="my-6 text-gray-500 text-sm">
        Pizza is the missing piece that makes everyday complete, a simple yet
        delicious joy in life
      </p>
      <div className="flex items-center gap-x-4">
        <Button
          variant="red"
          className="flex gap-x-2 items-center uppercase px-4 text-sm"
        >
          Order now <ArrowRight />
        </Button>
        <Button className="flex gap-x-2 items-center font-semibold text-gray-600">
          Learn more <ArrowRight />
        </Button>
      </div>
    </div>
    <div className="relative">
      <Image alt="pizza" src="/pizza.png" layout="fill" objectFit="contain" />
    </div>
  </section>
);
