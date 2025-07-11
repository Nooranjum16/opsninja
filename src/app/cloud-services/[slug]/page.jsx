import React from "react";
import { cloudData } from "@/APIdata/cloudData";
import * as FaIcons from "react-icons/fa";
import { notFound } from "next/navigation";
import TypewriterText from "@/components/Typewriter";
import Link from "next/link";
import Image from "next/image";

export default function CloudServiceDetailPage({ params }) {
  const { slug } = params;
  const pageData = cloudData.find((item) => item.slug === slug);

  if (!pageData) return notFound();

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-[#D1E6FF] to-[#2655A5] py-16 text-center text-[#0B1B2B]">
        <h1 className="text-4xl md:text-5xl font-bold">
          <TypewriterText text={pageData.title} />
        </h1>
        <p className="mt-3 text-gray-800 max-w-xl mx-auto text-base font-medium">
          <TypewriterText
            text={pageData.intro || "Explore this service below"}
          />
        </p>
      </section>

      {/* Service Cards */}
      <section className="py-20 px-6 md:px-10 bg-[#F4F4FB]">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
          {pageData.services.map((service, index) => {
            const Icon = FaIcons[service.icon];
            return (
              <div
                key={index}
                className="group bg-white hover:cursor-pointer p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl hover:border-yellow-400 transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow background on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FABB05] to-[#61CE70] opacity-0 group-hover:opacity-10 transition-all duration-300 z-0 rounded-2xl" />

                <div className="relative z-10">
                  <div className="text-[#FABB05] mb-4 text-4xl">
                    {Icon && <Icon />}
                  </div>
                  <h3 className="text-xl font-bold text-[#03143B] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Expertise You Can Trust Section */}
      <section className="bg-black text-white py-20 md:px-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[26px] md:text-[60px] font-bold mb-6">
              Expertise You Can Trust oklch(39.8% .195 277.366)
            </h2>

            <div className="flex flex-wrap gap-10 mb-10">
              <div>
                <p className="text-6xl font-bold text-[#FABB05]">
                  <TypewriterText text="20+" />
                </p>
                <p className="text-sm text-[#61CE70]">
                  <TypewriterText text="Cloud Engineers" />
                </p>
              </div>
              <div>
                <p className="text-6xl font-bold text-[#FABB05]">
                  <TypewriterText text="10+" />
                </p>
                <p className="text-sm text-[#61CE70]">
                  <TypewriterText text="Customers Transformed" />
                </p>
              </div>
              <div>
                <p className="text-6xl font-bold text-[#FABB05]">
                  <TypewriterText text="200+" />
                </p>
                <p className="text-sm text-[#61CE70]">
                  <TypewriterText text="Successful Projects" />
                </p>
              </div>
            </div>

            <Link href="/contact">
              <button className="bg-[#FABB05] text-[#03143B] px-6 py-2 rounded-br-xl rounded-tl-xl text-lg uppercase font-semibold hover:bg-[#61CE70] transition">
                Connect
              </button>
            </Link>
          </div>

          <div>
            <Image
              src="/images/expertise.png"
              alt="Expertise"
              width={500}
              height={500}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return cloudData.map((item) => ({
    slug: item.slug,
  }));
}
