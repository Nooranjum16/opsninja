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
      <section className="relative bg-gradient-to-b from-[#1e293b] to-[#0ea5e9] text-white py-20 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Unleashing the Potential of Cloud Solutions
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-8">
            We are a dedicated team of software developers with expertise in
            cloud technology and data solutions. We help businesses optimize
            their operations and achieve peak performance by leveraging the
            power of the cloud.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="inline-block bg-[#0ea5e9] text-white font-bold py-3 px-8 rounded-full shadow hover:bg-[#0369a1] transition-all duration-200 border-2 border-transparent text-lg"
            >
              Contact Us
            </Link>
            <Link
              href="#our-services"
              className="inline-block bg-transparent text-white font-bold py-3 px-8 rounded-full border-2 border-white hover:bg-white hover:text-[#1e293b] transition-all duration-200 text-lg"
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
              fill="#1e293b"
              d="M0,30 C180,80 400,0 720,40 C1040,80 1260,10 1440,60 L1440,90 L0,90 Z"
            />
          </svg>
        </div>
      </section>

      {/* Software's We Work With */}
      <section className="bg-white py-8 my-4">
        <h2 className="text-2xl font-bold text-center text-[#1e293b] mb-6">
          Software's We Work With
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto text-5xl">
          <span title="AWS">☁️</span>
          <span title="GKE">🛠️</span>
          <span title="Azure">🔷</span>
          <span title="Cloud Tool">💾</span>
        </div>
      </section>

      {/* Our Services */}
      <section id="our-services" className="bg-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <div className="bg-[#e0f2fe] rounded-2xl p-8 shadow-lg flex flex-col items-center">
            <span className="text-6xl mb-4">🔍</span>
            <h3 className="text-xl font-semibold text-[#1e293b] mb-2">
              Cloud Explore
            </h3>
            <p className="text-gray-700 text-sm mb-4 text-center">
              Assessments | TCO-Analysis | Cloud Adoption Roadmap | Quick POC |
              Cloud Foundations.
            </p>
            <span className="text-4xl mb-2">🌐</span>
            <Link href="#" className="text-[#0ea5e9] font-bold underline">
              Read More
            </Link>
          </div>
          <div className="bg-[#e0f2fe] rounded-2xl p-8 shadow-lg flex flex-col items-center">
            <span className="text-6xl mb-4">🚚</span>
            <h3 className="text-xl font-semibold text-[#1e293b] mb-2">
              Cloud Migrate
            </h3>
            <p className="text-gray-700 text-sm mb-4 text-center">
              Lift and shift | Re-Host and Re-Platform | Windows Server | Linux
              Environments | Oracle Apps.
            </p>
            <span className="text-4xl mb-2">📦</span>
            <Link href="#" className="text-[#0ea5e9] font-bold underline">
              Read More
            </Link>
          </div>
          <div className="bg-[#e0f2fe] rounded-2xl p-8 shadow-lg flex flex-col items-center">
            <span className="text-6xl mb-4">⚡</span>
            <h3 className="text-xl font-semibold text-[#1e293b] mb-2">
              Cloud Modernize
            </h3>
            <p className="text-gray-700 text-sm mb-4 text-center">
              Infrastructure As Code | DevOps Maturity Assessments | CI/CD
              Pipelines | Infra and App Modernization | Multi Cloud | Hybrid
              Cloud.
            </p>
            <span className="text-4xl mb-2">🧩</span>
            <Link href="#" className="text-[#0ea5e9] font-bold underline">
              Read More
            </Link>
          </div>
          <div className="bg-[#e0f2fe] rounded-2xl p-8 shadow-lg flex flex-col items-center">
            <span className="text-6xl mb-4">🛡️</span>
            <h3 className="text-xl font-semibold text-[#1e293b] mb-2">
              Cloud Manage
            </h3>
            <p className="text-gray-700 text-sm mb-4 text-center">
              Cloud Assessments | Architecture Reviews | Cost Optimization |
              Security Audits | VAPT.
            </p>
            <span className="text-4xl mb-2">🔒</span>
            <Link href="#" className="text-[#0ea5e9] font-bold underline">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us / Our Approach */}
      <div class="elementor-shape elementor-shape-top" data-negative="false">
        <svg
          fill="#D6E5FF"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            class="elementor-shape-fill"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          ></path>
        </svg>
      </div>
      {/* <section className="bg-[#D6E5FF] py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-[#03143B] mb-12">
          Why Us?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow">
            <span className="text-6xl mb-4" role="img" aria-label="Planning">
              📝
            </span>
            <h3 className="text-lg font-semibold text-[#03143B] mb-2">
              1. Planning and Strategy
            </h3>
            <p className="text-gray-600 text-sm">
              Personalized Cloud Adoption Frameworks, step-by-step plans, and
              technical strategy for your project.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow">
            <span className="text-6xl mb-4" role="img" aria-label="Discovery">
              🔎
            </span>
            <h3 className="text-lg font-semibold text-[#03143B] mb-2">
              2. Discovery and Assessment
            </h3>
            <p className="text-gray-600 text-sm">
              Workshops, interviews, and evaluations to understand your needs
              and current setup, plus hands-on onboarding.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow">
            <span className="text-6xl mb-4" role="img" aria-label="Execution">
              ⚙️
            </span>
            <h3 className="text-lg font-semibold text-[#03143B] mb-2">
              3. Execution
            </h3>
            <p className="text-gray-600 text-sm">
              Automated solutions, secure and dependable setups, and
              process-driven project management for fast delivery.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow">
            <span className="text-6xl mb-4" role="img" aria-label="Launch">
              🚀
            </span>
            <h3 className="text-lg font-semibold text-[#03143B] mb-2">
              4. Launch and Scale
            </h3>
            <p className="text-gray-600 text-sm">
              Ongoing management, scaling, cost optimization, security checks,
              and continuous improvement for your cloud workloads.
            </p>
          </div>
        </div>
      </section> */}

      {/* About Us */}
      <section className="bg-[#D6E5FF] py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#03143B] mb-4">About Us</h2>
            <p className="text-gray-700 mb-6">
              We are a team of skillful, experienced, and dedicated engineers
              with decades of combined expertise in Cloud, Data, and App
              Engineering. Our core members have been active practitioners since
              the early days of S3, AWS, and Azure.
            </p>
            <Link
              href="/about"
              className="inline-block bg-[#03143B] text-white font-bold py-3 px-8 rounded-full shadow hover:bg-[#27408B] transition-all duration-200"
            >
              More About Us
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/images/aws-about.svg" width={600} height={600}></Image>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-gradient-to-r from-[#03143B] to-[#3a5ca8] py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to scale your AWS cloud journey?
        </h2>
        <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
          Contact us today for a free consultation and discover how we can help
          you transform your business with AWS cloud solutions.
        </p>
        <Link
          href="https://calendly.com/opsninja/30min"
          target="_blank"
          className="inline-block bg-[#FABB05] text-[#03143B] font-bold py-3 px-8 rounded-full shadow hover:bg-yellow-400 transition"
        >
          Schedule a Free Consultation
        </Link>
      </section>
    </>
  );
}
