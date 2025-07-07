"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <nav className="w-full bg-white text-black  shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/Logo.png" width={100} height={50} alt="logo" />
        </Link>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-6 text-sm relative text-black">
          {/* Cloud Services Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 hover:text-[#2f40b5] text-base"
            >
              Cloud Services <FaChevronDown className="text-xs mt-0.5" />
            </button>

            {isDropdownOpen && (
              <div className="absolute mt-4 bg-white text-[#03143B] p-6 rounded-xl shadow-2xl z-50 w-80">
                <div className="flex flex-col space-y-4">
                  <Link
                    href="/services/cloud-services/application-modernization"
                    className="hover:text-[#34A853] transition font-medium"
                  >
                    Application Modernization
                  </Link>
                  <Link
                    href="/services/cloud-services/data-modernization"
                    className="hover:text-[#34A853] transition font-medium"
                  >
                    Data Modernization
                  </Link>
                  <Link
                    href="/services/cloud-services/infrastructure-modernization"
                    className="hover:text-[#34A853] transition font-medium"
                  >
                    Infrastructure Modernization
                  </Link>
                  <Link
                    href="/services/cloud-services/cloud-security"
                    className="hover:text-[#34A853] transition font-medium"
                  >
                    Cloud Security
                  </Link>
                  <Link
                    href="/services/cloud-services/cloud-consulting"
                    className="hover:text-[#34A853] transition font-medium"
                  >
                    Cloud Consulting
                  </Link>
                  <Link
                    href="/services/cloud-services/managed-cloud-service"
                    className="hover:text-[#34A853] transition font-medium"
                  >
                    Managed Cloud as a Service
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/services/aws"
            className="hover:text-[#2f40b5]  text-base"
          >
            AWS
          </Link>
          <Link
            href="/services/devops"
            className="hover:text-[#2f40b5]  text-base"
          >
            DevOps
          </Link>
          <Link
            href="/services/security"
            className="hover:text-[#2f40b5] text-base"
          >
            Security
          </Link>
          <Link href="/contact" className="hover:text-[#2f40b5] text-base">
            Contact
          </Link>
        </div>

        {/* CTA */}
        <div>
          <Link href="https://calendly.com/opsninja/30min" target="_blank">
            <button className="bg-[#FABB05] text-white px-5 py-4 font-bold rounded-full text-sm uppercase shadow hover:bg-yellow-400 transition-colors duration-200">
              Schedule a call
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
