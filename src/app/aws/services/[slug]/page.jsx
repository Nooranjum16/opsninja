"use client";
import React from "react";
import { useParams, notFound } from "next/navigation";
import { aws_services } from "@/APIdata/AWSdata";
import Image from "next/image";

export default function AWSDetailPage() {
  const { slug } = useParams();

  const pageData = aws_services.find((item) => item.slug === slug);

  if (!pageData) return notFound();

  return (
    <>
      {/* Header */}
      <div className=" min-h-3/4 bg-gradient-to-b from-[#D1E6FF] to-[#2655A5] py-20 text-center rounded-br-xl rounded-bl-xl">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-extrabold text-black mb-6">
            {pageData.title}
          </h1>
          <p className="text-black mt-2 max-w-xl mx-auto">
            {pageData.description || "Explore this service below"}
          </p>
        </div>
      </div>

      {/* Services grids */}
      <div className="max-w-6xl mx-auto">
        {pageData.services.map((services, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10"
          >
            <div className="flex justify-center p-6">
              <Image
                src={services.image}
                width={300}
                height={300}
                alt="aws-services"
                className="object-contain"
              />
            </div>
            <div className="p-6">
              <h2 className="font-extrabold mb-4 text-3xl text-[#2655A5]">
                {services.title}
              </h2>
              <p className="text-base font-medium leading-relaxed text-[#000000] mb-2">
                {services.description}
              </p>
              <ul className="list-disc list-inside text-base font-medium text-[#000000] space-y-1">
                {services.li1 && <li>{services.li1}</li>}
                {services.li2 && <li>{services.li2}</li>}
                {services.li3 && <li>{services.li3}</li>}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* services-cards  */}
      <div className="bg-black py-20">
        <h1 className="text-white font-extrabold text-6xl text-center mb-8">
          What we do?
        </h1>
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pageData.cards.map((card, index) => (
              <div
                key={index}
                className="card flex flex-col justify-center items-center rounded-lg shadow-lg bg-gradient-to-b from-[#D1E6FF] to-[#2655A5] p-4 "
              >
                <Image
                  src={card.icon}
                  width={100}
                  height={100}
                  alt="aws-services"
                ></Image>
                <h2 className="font-extrabold mb-4 text-4xl text-black">
                  {card.title}
                </h2>
                <p className="text-base font-normal leading-relaxed mb-8 text-center">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
