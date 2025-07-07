import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0B1B2B] text-white pt-12">
      <div className="max-w-7xl mx-auto px-6 pb-8 flex flex-col md:flex-row md:justify-between gap-12 border-b border-[#22334a]">
        {/* Logo & Description */}
        <div className="flex-1 min-w-[220px] flex flex-col items-start">
          <div className="flex items-center mb-4">
            <Image
              src="/images/Logo.png"
              width={60}
              height={60}
              alt="OpsNinja Logo"
            />
            <span className="ml-3 text-2xl font-bold tracking-wide">
              OPS
              <span className="text-[#FABB05]">NINJA</span>
            </span>
          </div>
          <p className="text-sm text-gray-300 mb-4 max-w-xs">
            OpsNinja remains committed to delivering top notch cloud services,
            transforming challenges into opportunities, and continuing to shape
            the future of Cloud Journey
          </p>
          <div className="flex space-x-3 mt-2">
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#22334a] hover:bg-[#FABB05] hover:text-[#03143B] transition"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#22334a] hover:bg-[#FABB05] hover:text-[#03143B] transition"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#22334a] hover:bg-[#FABB05] hover:text-[#03143B] transition"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#22334a] hover:bg-[#FABB05] hover:text-[#03143B] transition"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
        {/* Services */}
        <div className="flex-1 min-w-[180px]">
          <h4 className="text-lg font-bold mb-3 border-b border-[#FABB05] w-fit pb-1">
            Services
          </h4>
          <ul className="space-y-2 text-gray-200">
            <li>
              <Link href="/services/aws">Cloud Services</Link>
            </li>
            <li>
              <Link href="/services/gcp">GCP Services</Link>
            </li>
            <li>
              <Link href="/services/aws" className="hover:text-[#FABB05]">
                Google Cloud Platform
              </Link>
            </li>
          </ul>
        </div>
        {/* Case Studies */}
        <div className="flex-1 min-w-[180px]">
          <h4 className="text-lg font-semibold mb-3 border-b border-[#FABB05] w-fit pb-1">
            Case Studies
          </h4>
          <ul className="space-y-2 text-gray-200">
            <li>
              <Link href="/case-studies">Case Studies</Link>
            </li>
          </ul>
        </div>
        {/* Company */}
        <div className="flex-1 min-w-[180px]">
          <h4 className="text-lg font-semibold mb-3 border-b border-[#FABB05] w-fit pb-1">
            Company
          </h4>
          <ul className="space-y-2 text-gray-200">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="bg-[#FABB05] text-[#03143B] py-3 px-6 flex flex-col md:flex-row items-center justify-between text-sm font-medium">
        <div className="mb-2 md:mb-0">
          Copyright © {new Date().getFullYear()} | All Rights Reserved.
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline">
            Cookies Policy
          </Link>
          <Link href="#" className="hover:underline">
            Terms of Use
          </Link>
          <Link href="#" className="hover:underline">
            Do not sell my personal info
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
