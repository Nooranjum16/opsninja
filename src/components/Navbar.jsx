"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const pathname = usePathname();
  const isAWSPage = pathname?.startsWith("/aws");

  return (
    <nav
      className={`${
        isAWSPage ? "bg-[#D1E6FF]" : "w-full bg-white text-black shadow-md "
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <Link href="/">
          <Image src="/images/Logo.png" width={100} height={50} alt="logo" />
        </Link>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex space-x-6 text-sm relative text-black">
          {isAWSPage ? (
            <>
              <Link
                href="/aws"
                className="hover:text-[#2f40b5] text-[#544C4A] font-bold text-base"
              >
                Home
              </Link>
              <Link
                href="#our-services"
                className="hover:text-[#2f40b5] text-[#544C4A] font-bold text-base"
              >
                Services
              </Link>
              <div className="relative">
                <Link href="#">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center gap-1 hover:text-[#2f40b5] text-[#544C4A] font-bold text-base"
                  >
                    AWS <FaChevronDown className="text-xs mt-0.5" />
                  </button>
                </Link>
                {isDropdownOpen && (
                  <div className="absolute mt-4 bg-[#0B1B2B] text-[#D1E6FF] p-6 rounded-xl shadow-2xl z-50 w-80">
                    <div className="flex flex-col space-y-4">
                      <Link
                        href="/aws/services/aws-consulting-services"
                        className="transition font-medium text-base"
                      >
                        AWS Consulting Services
                      </Link>

                      <Link
                        href="/aws/services/managed-services"
                        className="transition font-medium text-base"
                      >
                        Managed Services
                      </Link>
                      <Link
                        href="/aws/services/migration-services"
                        className="transition font-medium text-base"
                      >
                        Migration Services
                      </Link>

                      <Link
                        href="/aws/services/cloud-cost-optimization"
                        className="transition font-medium text-base"
                      >
                        Cloud Cost Optimization
                      </Link>
                      <Link
                        href="/aws/services/aws-well-architected-review"
                        className="transition font-medium text-base"
                      >
                        AWS Well Architected Review
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/GC-platform"
                className="hover:text-[#2f40b5] text-[#544C4A] font-bold text-base"
              >
                GCP
              </Link>
              <Link
                href="/about"
                className="hover:text-[#2f40b5] text-[#544C4A] font-bold text-base"
              >
                Company
              </Link>
            </>
          ) : (
            <>
              {/* Cloud Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center gap-1 hover:text-[#2f40b5] text-[#544C4A] font-bold text-base"
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
                href="/GC-platform"
                className="hover:text-[#2f40b5] text-[#544C4A] font-bold text-base"
              >
                GC-Platform
              </Link>
              <Link
                href="/aws"
                className="hover:text-[#2f40b5] text-[#544C4A] font-bold text-base"
              >
                AWS
              </Link>
              <Link
                href="/about"
                className="hover:text-[#2f40b5] text-[#544C4A] font-bold text-base"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:text-[#2f40b5] text-[#544C4A] font-bold text-base"
              >
                Contact
              </Link>
            </>
          )}
        </div>

        {/* CTA Button (Desktop only) */}
        {isAWSPage ? (
          <>
            <div className="hidden md:block">
              <Link
                href="https://calendly.com/opsninja/30min?month=2025-07"
                target="_blank"
              >
                <button className="mt-4 bg-[#2655A5] capitalize font-bold text-white py-3 px-7 rounded-br-xl rounded-tl-xl hover:bg-[#61CE70]">
                  Hire ninja
                </button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="hidden md:block">
              <Link
                href="https://calendly.com/opsninja/30min?month=2025-07"
                target="_blank"
              >
                <button className="mt-4 bg-[#FDC700] uppercase font-bold text-[#524C4E] py-3 px-7 rounded-br-xl rounded-tl-xl hover:bg-[#61CE70]">
                  Schedule a call
                </button>
              </Link>
            </div>
          </>
        )}

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 z-50">
          <div className="flex flex-col space-y-2">
            {/* Cloud Services Dropdown (Mobile) */}
            {/* <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-1 w-full text-left py-2 hover:text-[#2f40b5] text-base"
              >
                Cloud Services <FaChevronDown className="text-xs mt-0.5" />
              </button>
              {isDropdownOpen && (
                <div className="pl-4 flex flex-col space-y-2 mt-2">
                  <Link
                    href="/services/cloud-services/application-modernization"
                    className="hover:text-[#34A853]"
                    onClick={closeMobileMenu}
                  >
                    Application Modernization
                  </Link>
                  <Link
                    href="/services/cloud-services/data-modernization"
                    className="hover:text-[#34A853]"
                    onClick={closeMobileMenu}
                  >
                    Data Modernization
                  </Link>
                  <Link
                    href="/services/cloud-services/infrastructure-modernization"
                    className="hover:text-[#34A853]"
                    onClick={closeMobileMenu}
                  >
                    Infrastructure Modernization
                  </Link>
                  <Link
                    href="/services/cloud-services/cloud-security"
                    className="hover:text-[#34A853]"
                    onClick={closeMobileMenu}
                  >
                    Cloud Security
                  </Link>
                  <Link
                    href="/services/cloud-services/cloud-consulting"
                    className="hover:text-[#34A853]"
                    onClick={closeMobileMenu}
                  >
                    Cloud Consulting
                  </Link>
                  <Link
                    href="/services/cloud-services/managed-cloud-service"
                    className="hover:text-[#34A853]"
                    onClick={closeMobileMenu}
                  >
                    Managed Cloud as a Service
                  </Link>
                </div>
              )}
            </div> */}

            {isAWSPage ? (
              <>
                <Link
                  href="/services/aws"
                  className="hover:text-[#FABB05]"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                <Link
                  href="#our-services"
                  className="hover:text-[#FABB05]"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
                <Link
                  href="#why-us"
                  className="hover:text-[#FABB05]"
                  onClick={closeMobileMenu}
                >
                  Why Us
                </Link>
                <Link
                  href="#about"
                  className="hover:text-[#FABB05]"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="hover:text-[#FABB05]"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/GC-platform"
                  className="hover:text-[#2f40b5]"
                  onClick={closeMobileMenu}
                >
                  GC-Platform
                </Link>
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center gap-1 w-full text-left py-2 hover:text-[#2f40b5] text-base"
                  >
                    Cloud Services <FaChevronDown className="text-xs mt-0.5" />
                  </button>
                  {isDropdownOpen && (
                    <div className="pl-4 flex flex-col space-y-2 mt-2">
                      <Link
                        href="/services/cloud-services/application-modernization"
                        className="hover:text-[#34A853]"
                        onClick={closeMobileMenu}
                      >
                        Application Modernization
                      </Link>
                      <Link
                        href="/services/cloud-services/data-modernization"
                        className="hover:text-[#34A853]"
                        onClick={closeMobileMenu}
                      >
                        Data Modernization
                      </Link>
                      <Link
                        href="/services/cloud-services/infrastructure-modernization"
                        className="hover:text-[#34A853]"
                        onClick={closeMobileMenu}
                      >
                        Infrastructure Modernization
                      </Link>
                      <Link
                        href="/services/cloud-services/cloud-security"
                        className="hover:text-[#34A853]"
                        onClick={closeMobileMenu}
                      >
                        Cloud Security
                      </Link>
                      <Link
                        href="/services/cloud-services/cloud-consulting"
                        className="hover:text-[#34A853]"
                        onClick={closeMobileMenu}
                      >
                        Cloud Consulting
                      </Link>
                      <Link
                        href="/services/cloud-services/managed-cloud-service"
                        className="hover:text-[#34A853]"
                        onClick={closeMobileMenu}
                      >
                        Managed Cloud as a Service
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  href="/aws"
                  className="hover:text-[#2f40b5]"
                  onClick={closeMobileMenu}
                >
                  AWS
                </Link>
                <Link
                  href="/about"
                  className="hover:text-[#2f40b5]"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-[#2f40b5]"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </>
            )}

            <Link href="https://calendly.com/opsninja/30min" target="_blank">
              <button className="bg-[#FABB05] text-white w-full py-3 font-bold rounded-full text-sm uppercase shadow hover:bg-yellow-400 transition-colors duration-200">
                Schedule a call
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
