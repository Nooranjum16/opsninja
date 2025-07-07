import React from "react";
import { FiMapPin, FiMail } from "react-icons/fi";

export default function page() {
  return (
    <>
      <main className="bg-[#F4F4FB] text-gray-900">
        <section className="py-30 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-8">
            {/* Left - Contact Info */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-[#101828]">
                Get In Touch
              </h1>
              <p className="text-[#4E4E50] font-bold">OpsNinja HQ</p>

              <div className="flex items-start gap-3">
                <FiMapPin className="text-[#FABB05] mt-1 text-xl" />
                <p className="text-[#4E4E50] leading-relaxed">
                  251 Block L – Phase 2 Johar Town, Lahore, Pakistan
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FiMail className="text-[#FABB05] mt-1 text-xl" />
                <p className="text-[#4E4E50]">sales@opsninja.net</p>
              </div>
            </div>

            {/* Right - Contact Form */}
            <form className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FABB05] text-black"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FABB05]  text-black"
                />
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FABB05]  text-black"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#FABB05] text-white font-bold py-3 px-6 rounded-full hover:bg-[#e0a704] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
