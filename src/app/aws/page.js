"use client";
import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

const awsServices = [
  {
    title: "EC2 & Compute Optimization",
    icon: "/images/aws.svg",
    description:
      "Launch scalable EC2 instances and optimize performance across your compute workloads while saving costs with Auto Scaling and Spot Instances.",
  },
  {
    title: "S3 & Storage Management",
    icon: "/images/aws.svg",
    description:
      "Secure, scalable object storage using S3 with lifecycle policies, intelligent tiering, and cross-region replication.",
  },
  {
    title: "Security & IAM",
    icon: "/images/aws.svg",
    description:
      "Implement fine-grained access control and secure infrastructure using IAM roles, policies, and encryption best practices.",
  },
  {
    title: "Monitoring & DevOps",
    icon: "/images/aws.svg",
    description:
      "CI/CD pipelines with CodePipeline, CodeDeploy and real-time monitoring via CloudWatch, CloudTrail, and X-Ray.",
  },
  {
    title: "Analytics & Big Data",
    icon: "/images/aws.svg",
    description:
      "Leverage AWS Glue, Athena, Redshift, and QuickSight to analyze massive datasets efficiently.",
  },
  {
    title: "Compliance & Governance",
    icon: "/images/aws.svg",
    description:
      "Ensure enterprise compliance with AWS Config, Organizations, and Control Tower to manage multi-account setups.",
  },
];

export default function page() {
  return (
    <>
      <section className="relative bg-[#D1E6FF]  text-[#0B1B2B] py-20 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Unleashing the Potential of Cloud Solutions
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            We are a dedicated team of software developers with expertise in
            cloud technology and data solutions. We help businesses optimize
            their operations and achieve peak performance by leveraging the
            power of the cloud.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="inline-block bg-[#0B1B2B] text-[#D1E6FF] font-bold py-3 px-8 rounded-br-xl rounded-tl-xl shadow hover:bg-[#0369a1] transition-all duration-200 border-2 border-transparent text-lg"
            >
              Contact Us
            </Link>
            <Link
              href="#our-services"
              className="inline-block bg-[#0B1B2B] text-[#D1E6FF] font-bold py-3 px-8 rounded-br-xl rounded-tl-xl shadow hover:bg-[#0369a1] transition-all duration-200 text-lg"
            >
              Our Services
            </Link>
          </div>
        </div>

        <div className="absolute left-0 right-0 bottom-0 w-full z-0 overflow-hidden pointer-events-none">
          <svg
            viewBox="0 0 1440 90"
            fill="none"
            className="w-full h-[60px] md:h-[120px]"
            preserveAspectRatio="none"
          >
            <path
              fill="#0B1B2B"
              d="M0,30 C180,80 400,0 720,40 C1040,80 1260,10 1440,60 L1440,90 L0,90 Z"
            />
          </svg>
        </div>
      </section>

      {/* Softwares We Work With */}
      <section className="py-8 my-4">
        <h2 className="text-2xl font-bold text-center text-[#1e293b] mb-6">
          Software &apos; We Work With
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto text-5xl">
          <span title="AWS">☁️</span>
          <span title="GKE">🛠️</span>
          <span title="Azure">🔷</span>
          <span title="Cloud Tool">💾</span>
        </div>
      </section>

      {/* Our Services */}
      <section id="our-services" className="bg-[#D1E6FF] py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="relative bg-gradient-to-r from-[#03143B] to-[#3a5ca8] rounded-2xl p-8 shadow-2xl flex flex-col items-center border-0 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 after:content-['01'] after:absolute after:top-6 after:left-6 after:text-6xl after:text-white/30 after:font-extrabold">
            <Image
              src="/images/cloud-explore.svg"
              width={100}
              height={100}
              alt="cloud-explore"
            ></Image>
            <h3 className="text-xl font-extrabold text-white mb-2 text-center">
              Cloud Explore
            </h3>
            <p className="text-white/90 text-base mb-3 text-center">
              Assist in exploration of the Cloud native World.
            </p>
            <p className="text-white font-semibold text-sm mb-4 text-center">
              Assessments | TCO-Analysis | Cloud Adoption Roadmap | Quick POC |
              Cloud Foundations.
            </p>
            <Link
              href="#"
              className="mt-2 inline-block bg-white text-[#2f40b5] font-bold py-2 px-6 rounded-full shadow hover:bg-[#0ea5e9] hover:text-white transition-all duration-200"
            >
              Read More
            </Link>
          </div>
          {/* Card 2 (highlighted) */}
          <div className="relative bg-gradient-to-r from-[#03143B] to-[#3a5ca8] rounded-2xl p-8 shadow-2xl flex flex-col items-center border-0 scale-105 z-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2  after:absolute after:top-6 after:left-6 after:text-6xl after:text-white/30 after:font-extrabold">
            <Image
              src="/images/cloud-explore.svg"
              width={100}
              height={100}
              alt="cloud-explore"
            ></Image>
            <h3 className="text-xl font-extrabold text-white mb-2 text-center">
              Cloud Migrate
            </h3>
            <p className="text-white/90 text-base mb-3 text-center">
              Engage in cloud migration for your projects.
            </p>
            <p className="text-white font-semibold text-sm mb-4 text-center">
              Lift and shift | Re-Host and Re-Platform | Windows Server | Linux
              Environments | Oracle Apps.
            </p>
            <Link
              href="#"
              className="mt-2 inline-block bg-white text-[#2f40b5] font-bold py-2 px-6 rounded-full shadow hover:bg-[#0ea5e9] hover:text-white transition-all duration-200"
            >
              Read More
            </Link>
          </div>
          {/* Card 3 */}
          <div className="relative bg-gradient-to-r from-[#03143B] to-[#3a5ca8] rounded-2xl p-8 shadow-2xl flex flex-col items-center border-0 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 after:absolute after:top-6 after:left-6 after:text-6xl after:text-white/30 after:font-extrabold">
            <Image
              src="/images/cloud-explore.svg"
              width={100}
              height={100}
              alt="cloud-explore"
            ></Image>
            <h3 className="text-xl font-extrabold text-white mb-2 text-center">
              Cloud Modernize
            </h3>
            <p className="text-white/90 text-base mb-3 text-center">
              Everything on the Kubernetes Ship.
            </p>
            <p className="text-white font-semibold text-sm mb-4 text-center">
              Infrastructure As Code | DevOps Maturity Assessments | CI/CD
              Pipelines | Infra and App Modernization | Multi Cloud | Hybrid
              Cloud.
            </p>
            <Link
              href="#"
              className="mt-2 inline-block bg-white text-[#2f40b5] font-bold py-2 px-6 rounded-full shadow hover:bg-[#0ea5e9] hover:text-white transition-all duration-200"
            >
              Read More
            </Link>
          </div>
          {/* Card 4 */}
          <div className="relative bg-gradient-to-r from-[#03143B] to-[#3a5ca8] rounded-2xl p-8 shadow-2xl flex flex-col items-center border-0 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2  after:absolute after:top-6 after:left-6 after:text-6xl after:text-white/30 after:font-extrabold">
            <Image
              src="/images/cloud-explore.svg"
              width={100}
              height={100}
              alt="cloud-explore"
            ></Image>
            <h3 className="text-xl font-extrabold text-white mb-2 text-center">
              Cloud Manage
            </h3>
            <p className="text-white/90 text-base mb-3 text-center">
              Cloud wellness is never ending!
            </p>
            <p className="text-white font-semibold text-sm mb-4 text-center">
              Cloud Assessments | Architecture Reviews | Cost Optimization |
              Security Audits | VAPT.
            </p>
            <Link
              href="#"
              className="mt-2 inline-block bg-white text-[#2f40b5] font-bold py-2 px-6 rounded-full shadow hover:bg-[#0ea5e9] hover:text-white transition-all duration-200"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us*/}
      <div className="">
        <svg
          fill="#D6E5FF"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            className="elementor-shape-fill"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          ></path>
        </svg>
      </div>

      {/* About Us */}
      <section className="py-20 px-4">
        <div className="max-w-6xl bg-gradient-to-r from-[#03143B] to-[#3a5ca8] mx-auto flex flex-col md:flex-row items-center gap-12 rounded-3xl shadow-xl p-6 md:p-12">
          {/* Image Card */}
          <div className="flex-1 flex justify-center items-center">
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8 border border-blue-100">
              <Image
                src="/images/aws-about.svg"
                width={350}
                height={350}
                alt="Team working together"
                className="w-full h-auto"
              />
            </div>
          </div>
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left text-white">
            <h2 className="text-2xl md:text-3xl font-extrabold  mb-2">
              About Us
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
              We are a team of skillful, experienced and dedicated Engineers.
            </h3>
            <p className="text-sm md:text-lg mb-8 max-w-xl mx-auto md:mx-0">
              As a team, we hold decades of combined expertise in Cloud, Data,
              and App Engineering. Our core members have been active
              practitioners since the early days of S3, AWS, and Azure.
            </p>
            <Link
              href="/about"
              className="inline-block bg-gradient-to-r from-[#03143B] to-[#3a5ca8] text-white font-bold py-3 px-10 rounded-br-xl rounded-tl-xl shadow-lg hover:from-[#0ea5e9] hover:to-[#2f40b5] transition-all duration-200 text-lg"
            >
              More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section
        className="relative py-20 px-4 text-center max-w-6xl mx-auto rounded-xl my-4"
        style={{ backgroundImage: "url('/images/aws-contact-bg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03143B]/60 to-[#3a5ca8]/80 z-0"></div>
        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get your right solution, contact now with us.
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how we can
            help you transform your business with AWS cloud solutions.
          </p>
          <Link
            href="https://calendly.com/opsninja/30min"
            target="_blank"
            className="inline-block bg-[#FABB05] text-[#03143B] font-bold py-3 px-8 rounded-full shadow hover:bg-yellow-400 transition"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
