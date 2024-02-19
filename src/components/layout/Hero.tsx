"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "@/components/icons";
import { Button } from "@/components/ui";
import Image from "next/image";

const SLOGANS = ["life", "happiness", "joy", "love", "magic", "home"];

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLOGANS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grid grid-cols-hero mt-4">
      <div className=" py-12">
        <h1 className="text-4xl font-semibold">
          Pizza is&nbsp;
          <span className="text-primary opacity-100 animate-pulse">
            {SLOGANS[index]}
          </span>
          .
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
          <Button className="hover:animate-bounce flex gap-x-2 items-center font-semibold text-gray-600 hover:text-primary transition-all">
            Learn more <ArrowRight />
          </Button>
        </div>
      </div>
      <div className="relative">
        <Image alt="pizza" src="/pizza.png" layout="fill" objectFit="contain" />
      </div>
    </section>
  );
};
