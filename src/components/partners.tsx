import { partners } from "@/app/data/partners";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export const Partners = () => {
  return (
    <div className="py-10 px-4 sm:px-8 lg:px-16">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-[700] font-Inter text-center">
        Nossos parceiros
      </h1>
      <div className="w-full flex justify-center">
        <div className="w-[50px] h-[2px] bg-gray-800 mt-4" />
      </div>
      <Marquee className="w-full my-10" gradient={false}>
        {partners.length > 0 &&
          partners.map((item, index) => (
            <Image
              src={item.url}
              alt=""
              width={400}
              height={400}
              key={index}
              className="mx-2 sm:mx-5 w-[100px] sm:w-[150px] object-contain cursor-pointer"
            />
          ))}
      </Marquee>
    </div>
  );
};
