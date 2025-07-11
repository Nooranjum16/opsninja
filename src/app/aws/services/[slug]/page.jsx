import React from "react";
import { aws_services } from "@/APIdata/AWSdata";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function AWSDetailPage({ params }) {
  const { slug } = params;
  const pageData = aws_services.find((item) => item.slug === slug);

  if (!pageData) return notFound();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#D1E6FF] to-[#2655A5] min-h-[70vh] py-20 text-center rounded-b-3xl flex flex-col justify-center items-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0B1B2B] mb-4">
            {pageData.title}
          </h1>
          <p className="text-[#0B1B2B] text-lg max-w-2xl mx-auto">
            {pageData.description || "Explore this service below"}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 md:px-6">
        {pageData.services.map((services, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex justify-center">
              <Image
                src={services.image}
                width={360}
                height={360}
                alt={services.title}
                className="rounded-xl object-contain transform transition duration-500  hover:scale-105 hover:cursor-pointer"
              />
            </div>
            <div>
              <h2 className="text-4xl font-extrabold  mb-4 text-[#2655A5]">
                {services.title}
              </h2>
              <p className="text-base text-gray-800 mb-3">
                {services.description}
              </p>
              <ul className="space-y-2">
                {[
                  services.li1,
                  services.li2,
                  services.li3,
                  services.li4,
                  services.li5,
                ]
                  .filter(Boolean)
                  .map((li, idx) => (
                    <li
                      key={idx}
                      className="relative pl-8 text-base font-semibold text-gray-700"
                    >
                      <span className="absolute left-0 top-1 text-yellow text-lg">
                        ✔️
                      </span>
                      {li}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/*cards What We Do Section */}
      <section className="bg-gradient-to-r from-[#D1E6FF] to-[#2655A5] py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#0b1b2b] mb-12">
          What We Do?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pageData.cards.map((card, index) => (
            <div
              key={index}
              className="hover:cursor-pointer rounded-2xl p-6 shadow-xl text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={card.icon}
                width={80}
                height={80}
                alt={card.title}
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-darkBlue mb-2">
                {card.title}
              </h3>
              <p className="text-gray-800 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💡 How Are We Different Section (Dynamic) */}
      <section className="max-w-7xl mx-auto py-20 px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-extrabold text-[#2655A5] mb-6">
            {slug === "aws-consulting-services"
              ? "Derive the MOST out of your cloud!"
              : slug === "managed-services"
              ? "Embrace the Agile and DevOps approach to conducting your business."
              : slug === "migration-services"
              ? "We also provide Custom Migration Services:"
              : slug === "cloud-cost-optimization"
              ? "Improved Performance With No Extra Cloud Cost"
              : ""}
          </h2>

          <p className="text-gray-700 mb-8">
            {slug === "aws-consulting-services"
              ? "We execute our expertise in the broader spectrum of the cloud technology domain to optimize your business performance."
              : slug === "managed-services"
              ? "Our services ensure improved agility and robustness for your cloud-based IT infrastructure."
              : slug === "migration-services"
              ? "Elevate your business with OpsNinja’s migration solutions. Modernize and innovate at your pace through expert planning, seamless data transfer, and comprehensive cloud support."
              : slug === "cloud-cost-optimization"
              ? "Achieve rapid ROI with our cloud cost optimization services, unlocking ongoing cloud potential for your business"
              : ""}
          </p>

          {/* ✅ Feature 1 */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-[#2655a5] text-white p-2 rounded-md text-xl">
              ✔️
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#2655a5] mb-1">
                {slug === "aws-consulting-services"
                  ? "Get the most comprehensive Cloud Solutions!"
                  : "Automate daily tasks:"}
              </h3>
              <p className="text-gray-700 text-sm">
                {slug === "aws-consulting-services"
                  ? "Complete Cloud Solutions Our consulting services cover crucial aspects like cloud migration, Infrastructure as Code (IaC), and Continuous Deployment and Development (CI/CD). We optimize your cloud efficiency comprehensively."
                  : "We handle your everyday responsibilities such as monitoring, patch management, and incident management."}
              </p>
            </div>
          </div>

          {/* ✅ Feature 2 */}
          <div className="flex items-start gap-4">
            <div className="bg-[#2655A5] text-white p-2 rounded-md text-xl">
              ✔️
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#2655A5] mb-1">
                {slug === "aws-consulting-services"
                  ? "Enhancing Cloud Resilience Together.!"
                  : "Governance"}
              </h3>
              <p className="text-gray-700 text-sm">
                {slug === "aws-consulting-services"
                  ? "Unlock performance and financial optimization through expert analysis and automation. Our adept data scientists collaborate with you to elevate your cloud assets' performance and returns."
                  : "We oversee your business's compliance needs, covering finance, technical, and operational requirements"}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <Image
            src={
              pageData.services?.[0]?.image || "/images/default-aws-detail.svg"
            }
            width={500}
            height={500}
            alt="Cloud Diagram"
            className="object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return aws_services.map((item) => ({
    slug: item.slug,
  }));
}
