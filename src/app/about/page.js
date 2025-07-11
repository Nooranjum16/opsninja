import LogoSlider from "@/components/LogoSlider";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutUs() {
  const aboutLogos = [
    { src: "/images/about-google.png", alt: "Google architect " },
    { src: "/images/Cloud-Devops-Engineer.png", alt: "Cloud DevOps Engineer" },
    { src: "/images/cloud-digital-leader.png", alt: "Cloud Digital Leader" },
    {
      src: "/images/cloud-security-engineer.png",
      alt: "Cloud Security Engineer",
    },
  ];

  const ourValues = [
    {
      title: "Accountability",
      description:
        "Setting achievable goals, we strategically align our resources, skills, and drive towards their fulfillment. True to our word, we hold ourselves accountable for every action and its ultimate impact.",
    },
    {
      title: "Support",
      description:
        "We navigate the world with open hearts. Understanding and support flow freely from us, ensuring everyone feels seen and cared for.",
    },
    {
      title: "Curiosity",
      description:
        "Problem-solving, research, and exploration—they’re an irresistible call for us. We’re insatiable learners, unafraid to raise questions and unlock new potential.",
    },
    {
      title: "Effectiveness",
      description:
        "From initial allocation to final execution, we leverage every resource to its fullest potential, guaranteeing swift and seamless completion of assigned tasks.",
    },
    {
      title: "Teamwork",
      description:
        "Our greatest strength lies in the unified passion we share for our cause. We stand shoulder-to-shoulder, supporting and empowering each other to reach extraordinary heights",
    },
    {
      title: "Integrity",
      description:
        "Honesty is ingrained in our very foundation. We make a conscious effort to be open and transparent in everything we do. This commitment is built on the belief that trust is essential with our customers, partners, and employees.",
    },
  ];
  return (
    <main className="bg-[#F4F4FB]">
      <section className="relative bg-gradient-to-r from-[#03143B] to-[#3a5ca8] text-white py-20 px-6 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            About OpsNinja
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-8">
            Empowering businesses to innovate, scale, and succeed in the cloud
            with world-class expertise and a customer-first approach.
          </p>
          <Link
            href="https://calendly.com/opsninja/30min?month=2025-07"
            target="blank"
          >
            <button className="mb-10 mx-auto bg-[#FDC700] font-bold text-[#1E293B] capitalize py-3 px-7 rounded-br-xl rounded-tl-xl">
              Lets chat
            </button>
          </Link>
        </div>
        {/* SVG Curve */}
        <div className="absolute left-0 right-0 bottom-0 w-full z-0 overflow-hidden pointer-events-none">
          <svg
            viewBox="0 0 1440 90"
            fill="none"
            className="w-full h-[60px] md:h-[120px]"
            preserveAspectRatio="none"
          >
            <path
              fill="#1e293b"
              d="M0,30 C180,80 400,0 720,40 C1040,80 1260,10 1440,60 L1440,90 L0,90 Z"
            />
          </svg>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 border-l-8 border-[#0ea5e9]">
          <h2 className="text-2xl font-bold text-[#03143B] mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            At OpsNinja, our mission is to help organizations unlock the full
            potential of the cloud. We deliver tailored solutions, expert
            guidance, and ongoing support to ensure your cloud journey is
            seamless and successful.
          </p>
          <h3 className="text-xl font-semibold text-[#3a5ca8] mt-6 mb-2">
            Our Vision
          </h3>
          <p className="text-gray-700 text-base">
            To be the trusted partner for businesses worldwide, enabling
            innovation and growth through cloud technology.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section  */}
      <section className="py-16 px-4 ">
        <h2 className="text-3xl font-bold text-center text-[#03143B] mb-12 tracking-wide">
          Why Choose OpsNinja?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="text-white justify-between min-h-[180px] hover:cursor-pointer relative bg-gradient-to-r from-[#03143B] to-[#3a5ca8] rounded-2xl p-8 shadow-2xl flex flex-col items-center border-0 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2  after:absolute after:top-6 after:left-6 after:text-6xl after:text-white/30 after:font-extrabold">
            <Image
              src="/images/why-experts.webp"
              width={64}
              height={64}
              alt="Certified Cloud Experts"
              className="mb-4"
            />
            <h3 className="text-lg font-bold text-white mb-2 text-center">
              Certified Cloud Experts
            </h3>
            <p className="text-blue-100 text-sm text-center">
              Our team holds top certifications and real-world experience across
              Google Cloud, AWS, and Azure.
            </p>
          </div>
          {/* Card 2*/}
          <div className="text-white justify-between min-h-[180px] hover:cursor-pointer relative bg-gradient-to-r from-[#03143B] to-[#3a5ca8] rounded-2xl p-8 shadow-2xl flex flex-col items-center border-0 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2  after:absolute after:top-6 after:left-6 after:text-6xl after:text-white/30 after:font-extrabold">
            <Image
              src="/images/why-support.webp"
              width={64}
              height={64}
              alt="24/7 Support"
              className="mb-4"
            />
            <h3 className="text-lg font-bold text-white mb-2 text-center">
              24/7 Support
            </h3>
            <p className="text-blue-100 text-sm text-center">
              We’re always available to help, ensuring your business runs
              smoothly at all times.
            </p>
          </div>
          {/* Card 3*/}
          <div className="text-white justify-between min-h-[180px] hover:cursor-pointer relative bg-gradient-to-r from-[#03143B] to-[#3a5ca8] rounded-2xl p-8 shadow-2xl flex flex-col items-center border-0 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2  after:absolute after:top-6 after:left-6 after:text-6xl after:text-white/30 after:font-extrabold">
            <Image
              src="/images/why-security.webp"
              width={64}
              height={64}
              alt="Security First"
              className="mb-4"
            />
            <h3 className="text-lg font-bold text-white mb-2 text-center">
              Security First
            </h3>
            <p className="text-blue-100 text-sm text-center">
              We implement industry-leading security practices to protect your
              data and operations.
            </p>
          </div>
          {/* Card 4 */}
          <div className="text-white justify-between min-h-[180px] hover:cursor-pointer relative bg-gradient-to-r from-[#03143B] to-[#3a5ca8] rounded-2xl p-8 shadow-2xl flex flex-col items-center border-0 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2  after:absolute after:top-6 after:left-6 after:text-6xl after:text-white/30 after:font-extrabold">
            <Image
              src="/images/why-results.webp"
              width={64}
              height={64}
              alt="Proven Results"
              className="mb-4"
            />
            <h3 className="text-lg font-bold text-white mb-2 text-center">
              Proven Results
            </h3>
            <p className="text-blue-100 text-sm text-center">
              We have a track record of successful cloud migrations,
              optimizations, and managed services.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#03143B] mb-4">Who We Are</h2>
          <p className="text-gray-700 text-lg">
            OpsNinja is a team of passionate cloud professionals dedicated to
            helping organizations transform, innovate, and thrive in the digital
            era. With years of experience across industries, we deliver tailored
            solutions and ongoing support to ensure your cloud journey is
            seamless and successful.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#03143B] mb-12 tracking-wide">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  ">
            {ourValues.map((value, index) => {
              return (
                <div
                  key={index}
                  className="text-white justify-between min-h-[180px] hover:cursor-pointer relative bg-gradient-to-r from-[#03143B] to-[#3a5ca8] rounded-2xl p-8 shadow-2xl flex flex-col items-center border-0 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2  after:absolute after:top-6 after:left-6 after:text-6xl after:text-white/30 after:font-extrabold"
                >
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-base">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#34A753] mb-8 capitalize">
            Our team’s expertise and certifications
          </h2>
          <LogoSlider logos={aboutLogos} />
        </div>
      </section>
    </main>
  );
}
