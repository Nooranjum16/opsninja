"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="w-full bg-white text-black shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/Logo.png" width={100} height={50} alt="logo" />
        </Link>

        {/* Desktop Menu Links */}
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
          <Link href="/services/aws" className="hover:text-[#2f40b5] text-base">
            AWS
          </Link>
          <Link
            href="/services/devops"
            className="hover:text-[#2f40b5] text-base"
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

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Open menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* CTA (Desktop only) */}
        <div className="hidden md:block">
          <Link href="https://calendly.com/opsninja/30min" target="_blank">
            <button className="bg-[#FABB05] text-white px-5 py-4 font-bold rounded-full text-sm uppercase shadow hover:bg-yellow-400 transition-colors duration-200">
              Schedule a call
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 z-50">
          <div className="flex flex-col space-y-2">
            {/* Cloud Services Dropdown (Mobile) */}
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
                    className="hover:text-[#34A853] transition font-medium"
                    onClick={closeMobileMenu}
                  >
                    Application Modernization
                  </Link>
                  <Link
                    href="/services/cloud-services/data-modernization"
                    className="hover:text-[#34A853] transition font-medium"
                    onClick={closeMobileMenu}
                  >
                    Data Modernization
                  </Link>
                  <Link
                    href="/services/cloud-services/infrastructure-modernization"
                    className="hover:text-[#34A853] transition font-medium"
                    onClick={closeMobileMenu}
                  >
                    Infrastructure Modernization
                  </Link>
                  <Link
                    href="/services/cloud-services/cloud-security"
                    className="hover:text-[#34A853] transition font-medium"
                    onClick={closeMobileMenu}
                  >
                    Cloud Security
                  </Link>
                  <Link
                    href="/services/cloud-services/cloud-consulting"
                    className="hover:text-[#34A853] transition font-medium"
                    onClick={closeMobileMenu}
                  >
                    Cloud Consulting
                  </Link>
                  <Link
                    href="/services/cloud-services/managed-cloud-service"
                    className="hover:text-[#34A853] transition font-medium"
                    onClick={closeMobileMenu}
                  >
                    Managed Cloud as a Service
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/services/aws"
              className="hover:text-[#2f40b5] text-base"
              onClick={closeMobileMenu}
            >
              AWS
            </Link>
            <Link
              href="/services/devops"
              className="hover:text-[#2f40b5] text-base"
              onClick={closeMobileMenu}
            >
              DevOps
            </Link>
            <Link
              href="/services/security"
              className="hover:text-[#2f40b5] text-base"
              onClick={closeMobileMenu}
            >
              Security
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#2f40b5] text-base"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            <Link
              href="https://calendly.com/opsninja/30min"
              target="_blank"
              className="mt-4"
            >
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
