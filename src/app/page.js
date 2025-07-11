import Image from "next/image";
import LogoSlider from "@/components/LogoSlider";
import Link from "next/link";
import { FiMapPin, FiMail } from "react-icons/fi";
import TypewriterText from "@/components/Typewriter";

export default function Home() {
  const homelogos = [
    { src: "/images/hlogo1.jpg", alt: "Google cloud" },
    { src: "/images/hlogo2.jpg", alt: "Google cloud " },
    { src: "/images/hlogo3.jpg", alt: "Google cloud" },
    { src: "/images/hlogo4.jpg", alt: "Google cloud" },
    { src: "/images/hlogo5.jpg", alt: "Google cloud" },
  ];
  return (
    <>
      <main className="bg-[#F4F4FB] text-gray-900">
        {/* Hero Section */}
        <section
          style={{ backgroundImage: "url('/images/hero-section.png')" }}
          className="min-h-screen bg-cover bg-repeat-no bg-position-center flex flex-col items-center justify-center text-center bg-yellow-200 text-white p-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <TypewriterText text="Your Cloud. Our Expertise." />
          </h1>
          <p className="text-lg md:text-base mb-6 max-w-xl leading-relaxed">
            <TypewriterText text="OpsNinja is the path to modernize your IT infrastructure with cloud technology providing Google Cloud Platform professional services." />
          </p>
          <Link href="https://calendly.com/opsninja/30min?" target="blanck">
            <button className="bg-[#FABB05] hover:cursor-pointer py-2 rounded-br-xl rounded-tl-xl text-lg uppercase text-indigo-800 px-6 hover:bg-[#61CE70] transition">
              Get in touch with us
            </button>
          </Link>
        </section>
        <LogoSlider logos={homelogos} />

        {/* Services Section */}
        <section className="py-16 px-6 md:px-20 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              "Cloud Migrations",
              "CI/CD Pipelines",
              "Monitoring & Security",
            ].map((service) => (
              <div
                key={service}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-sm text-gray-600">
                  We help companies move to the cloud, streamline deployments,
                  and secure infrastructure.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* expertise you can trust section  */}
        <section className="bg-[#000000] text-white py-20 md:px-20">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h1 className="text-[25px] md:text-[70px] leading-tight font-bold mb-4">
                Expertise You Can Trust
              </h1>

              <div className="flex flex-wrap gap-10 my-8">
                <div>
                  <p className="text-6xl font-bold">
                    <TypewriterText text="20+" />
                  </p>
                  <p className="text-sm text-[#3AAC62]">
                    <TypewriterText text="Cloud Engineers" />
                  </p>
                </div>
                <div>
                  <p className="text-6xl font-bold">
                    <TypewriterText text="10+" />
                  </p>
                  <p className="text-sm text-[#2F40B5]">
                    <TypewriterText text="Customers Transformed" />
                  </p>
                </div>
                <div>
                  <p className="text-6xl font-bold">
                    <TypewriterText text="200+" />
                  </p>
                  <p className="text-sm text-[#fffff]">
                    <TypewriterText text="Successful Projects" />
                  </p>
                </div>
              </div>

              <Link href="/contact">
                <button className="bg-[#FDC700] hover:bg-[#61CE70] hover:cursor-pointer rounded-br-xl rounded-tl-xl text-[#524c4e] px-5 py-2 text-lg uppercase">
                  connect
                </button>
              </Link>
            </div>
            <div>
              <Image
                src="/images/expertise.png"
                alt="Expertise"
                width={500}
                height={500}
                className="w-full h-auto bg-black"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          className="md:min-h-screen max-w-7xl mx-auto rounded-[30px] my-6 shadow-md text-white py-20 px-6 md:px-20 flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/images/call-action.jpg')" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why OpsNinja?</h2>
          <p className="max-w-2xl mx-auto text-lg text-center mb-6">
            Our team of certified DevOps engineers brings years of experience
            helping startups and enterprises scale securely and efficiently in
            the cloud.
          </p>
          <Link href="/">
            <button className="bg-[#FABB05] hover:bg-[#61CE70] hover:cursor-pointer rounded-br-xl rounded-tl-xl text-[#524c4e] px-5 py-2 text-lg capitalize">
              Let&apos;s chat
            </button>
          </Link>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
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
                  required
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FABB05] text-black"
                />
              </div>

              <div>
                <input
                  required
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
                className="bg-[#FABB05] hover:bg-[#61CE70] hover:cursor-pointer rounded-br-xl rounded-tl-xl text-[#524c4e] px-5 py-2  text-lg capitalize"
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
