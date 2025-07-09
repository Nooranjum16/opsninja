import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function GCPUnifiedPage() {
  return (
    <main className="bg-[#ECF0F4]">
      <section className="relative bg-gradient-to-r from-[#03143B] to-[#3a5ca8] text-white py-20 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Google Cloud Platform
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-8">
            Build, deploy, and scale your applications, websites, and services
            with ease on the same robust infrastructure that powers Google
            itself.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <Link
              href="https://calendly.com/opsninja/30min"
              target="_blank"
              className="inline-block bg-[#0ea5e9] text-white font-bold py-3 px-8 rounded-full shadow hover:bg-[#0369a1] transition-all duration-200 border-2 border-transparent text-lg"
            >
              Order Service
            </Link>
            <Link
              href="https://calendly.com/opsninja/30min"
              target="_blank"
              className="inline-block bg-transparent text-white font-bold py-3 px-8 rounded-full border-2 border-white hover:bg-white hover:text-[#1e293b] transition-all duration-200 text-lg"
            >
              30-days Free Trial
            </Link>
          </div>
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

      {/* GCP Services Section (Unified) */}
      <section id="gcp-services" className="bg-[#ECF0F4] py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-12">
          Our Google Cloud Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="relative bg-gradient-to-r from-[#03143B] to-[#3a5ca8] rounded-2xl p-8 shadow-2xl flex flex-col items-center border-0 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 after:content-['01'] after:absolute after:top-6 after:left-6 after:text-6xl after:text-white/30 after:font-extrabold">
            <Image
              src="/images/google-cloud-service2.webp"
              width={150}
              height={150}
              alt="GCP Storage"
            />
            <h3 className="text-xl font-extrabold text-white mb-2 text-center">
              Compute Engine
            </h3>
            <p className="text-white/90 text-base mb-3 text-center">
              Scalable virtual machines for all your workloads.
            </p>
            <p className="text-white font-semibold text-sm mb-4 text-center">
              VMs | Autoscaling | Custom Images | Preemptible VMs
            </p>
            <Link
              href="#"
              className="mt-2 inline-block bg-white text-[#2f40b5] font-bold py-2 px-6 rounded-full shadow hover:bg-[#0ea5e9] hover:text-white transition-all duration-200"
            >
              Read More
            </Link>
          </div>
          {/* Card 2 */}
          <div className="relative bg-gradient-to-r from-[#03143B] to-[#3a5ca8] rounded-2xl p-8 shadow-2xl flex flex-col items-center border-0 scale-105 z-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 after:content-['02'] after:absolute after:top-6 after:left-6 after:text-6xl after:text-white/30 after:font-extrabold">
            <Image
              src="/images/google-cloud-service2.webp"
              width={150}
              height={150}
              alt="GCP Storage"
            />
            <h3 className="text-xl font-extrabold text-white mb-2 text-center">
              Cloud Storage
            </h3>
            <p className="text-white/90 text-base mb-3 text-center">
              Secure, durable, and scalable object storage.
            </p>
            <p className="text-white font-semibold text-sm mb-4 text-center">
              Buckets | Lifecycle | Multi-region | Data Security
            </p>
          </div>
          {/* Card 3 */}
          <div className="relative bg-gradient-to-r from-[#03143B] to-[#3a5ca8] rounded-2xl p-8 shadow-2xl flex flex-col items-center border-0 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 after:content-['03'] after:absolute after:top-6 after:left-6 after:text-6xl after:text-white/30 after:font-extrabold">
            <Image
              src="/images/google-cloud-service2.webp"
              width={150}
              height={150}
              alt="GCP Storage"
            />
            <h3 className="text-xl font-extrabold text-white mb-2 text-center">
              Kubernetes Engine
            </h3>
            <p className="text-white/90 text-base mb-3 text-center">
              Managed Kubernetes for containerized apps.
            </p>
            <p className="text-white font-semibold text-sm mb-4 text-center">
              GKE | CI/CD | Auto-upgrade | Multi-cluster
            </p>
          </div>
          {/* Card 4 */}
          <div className="relative bg-gradient-to-r from-[#03143B] to-[#3a5ca8] rounded-2xl p-8 shadow-2xl flex flex-col items-center border-0 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 after:content-['04'] after:absolute after:top-6 after:left-6 after:text-6xl after:text-white/30 after:font-extrabold">
            <Image
              src="/images/google-cloud-service2.webp"
              width={150}
              height={150}
              alt="GCP Storage"
            />
            <h3 className="text-xl font-extrabold text-white mb-2 text-center">
              BigQuery & Analytics
            </h3>
            <p className="text-white/90 text-base mb-3 text-center">
              Analyze massive datasets with serverless analytics.
            </p>
            <p className="text-white font-semibold text-sm mb-4 text-center">
              BigQuery | Dataflow | Looker | AI/ML
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 text-center">
        {/* Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex justify-center">
            <Image
              src="/images/get_in_touch_form.webp"
              alt="Get in Touch"
              width={450}
              height={300}
            />
          </div>
          <div>
            <form className="rounded-2xl p-8 flex flex-col gap-6 text-left">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  className="w-full rounded-lg border border-blue-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  className="w-full rounded-lg border border-blue-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
                  placeholder="you@email.com"
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  className="w-full rounded-lg border border-blue-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
                  placeholder="Company Domain name"
                />
                <input
                  type="tel"
                  className="w-full rounded-lg border border-blue-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
                  placeholder="Job title"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <select
                  className="w-full rounded-lg border border-blue-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] text-gray-700"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Country / Region *
                  </option>
                  <option>Afghanistan</option>
                  <option>Albania</option>
                  <option>Algeria</option>
                  <option>Andorra</option>
                  <option>Angola</option>
                  <option>Antigua and Barbuda</option>
                  <option>Argentina</option>
                  <option>Armenia</option>
                  <option>Australia</option>
                  <option>Austria</option>
                  <option>Azerbaijan</option>
                  <option>Bahamas</option>
                  <option>Bahrain</option>
                  <option>Bangladesh</option>
                  <option>Barbados</option>
                  <option>Belarus</option>
                  <option>Belgium</option>
                  <option>Belize</option>
                  <option>Benin</option>
                  <option>Bhutan</option>
                  <option>Bolivia</option>
                  <option>Bosnia and Herzegovina</option>
                  <option>Botswana</option>
                  <option>Brazil</option>
                  <option>Brunei</option>
                  <option>Bulgaria</option>
                  <option>Burkina Faso</option>
                  <option>Burundi</option>
                  <option>Cabo Verde</option>
                  <option>Cambodia</option>
                  <option>Cameroon</option>
                  <option>Canada</option>
                  <option>Central African Republic</option>
                  <option>Chad</option>
                  <option>Chile</option>
                  <option>China</option>
                  <option>Colombia</option>
                  <option>Comoros</option>
                  <option>Congo (Congo-Brazzaville)</option>
                  <option>Costa Rica</option>
                  <option>Côte d'Ivoire</option>
                  <option>Croatia</option>
                  <option>Cuba</option>
                  <option>Cyprus</option>
                  <option>Czechia (Czech Republic)</option>
                  <option>Democratic Republic of the Congo</option>
                  <option>Denmark</option>
                  <option>Djibouti</option>
                  <option>Dominica</option>
                  <option>Dominican Republic</option>
                  <option>Ecuador</option>
                  <option>Egypt</option>
                  <option>El Salvador</option>
                  <option>Equatorial Guinea</option>
                  <option>Eritrea</option>
                  <option>Estonia</option>
                  <option>Eswatini (fmr. 'Swaziland')</option>
                  <option>Ethiopia</option>
                  <option>Fiji</option>
                  <option>Finland</option>
                  <option>France</option>
                  <option>Gabon</option>
                  <option>Gambia</option>
                  <option>Georgia</option>
                  <option>Germany</option>
                  <option>Ghana</option>
                  <option>Greece</option>
                  <option>Grenada</option>
                  <option>Guatemala</option>
                  <option>Guinea</option>
                  <option>Guinea-Bissau</option>
                  <option>Guyana</option>
                  <option>Haiti</option>
                  <option>Holy See</option>
                  <option>Honduras</option>
                  <option>Hungary</option>
                  <option>Iceland</option>
                  <option>India</option>
                  <option>Indonesia</option>
                  <option>Iran</option>
                  <option>Iraq</option>
                  <option>Ireland</option>
                  <option>Israel</option>
                  <option>Italy</option>
                  <option>Jamaica</option>
                  <option>Japan</option>
                  <option>Jordan</option>
                  <option>Kazakhstan</option>
                  <option>Kenya</option>
                  <option>Kiribati</option>
                  <option>Kuwait</option>
                  <option>Kyrgyzstan</option>
                  <option>Laos</option>
                  <option>Latvia</option>
                  <option>Lebanon</option>
                  <option>Lesotho</option>
                  <option>Liberia</option>
                  <option>Libya</option>
                  <option>Liechtenstein</option>
                  <option>Lithuania</option>
                  <option>Luxembourg</option>
                  <option>Madagascar</option>
                  <option>Malawi</option>
                  <option>Malaysia</option>
                  <option>Maldives</option>
                  <option>Mali</option>
                  <option>Malta</option>
                  <option>Marshall Islands</option>
                  <option>Mauritania</option>
                  <option>Mauritius</option>
                  <option>Mexico</option>
                  <option>Micronesia</option>
                  <option>Moldova</option>
                  <option>Monaco</option>
                  <option>Mongolia</option>
                  <option>Montenegro</option>
                  <option>Morocco</option>
                  <option>Mozambique</option>
                  <option>Myanmar (formerly Burma)</option>
                  <option>Namibia</option>
                  <option>Nauru</option>
                  <option>Nepal</option>
                  <option>Netherlands</option>
                  <option>New Zealand</option>
                  <option>Nicaragua</option>
                  <option>Niger</option>
                  <option>Nigeria</option>
                  <option>North Korea</option>
                  <option>North Macedonia</option>
                  <option>Norway</option>
                  <option>Oman</option>
                  <option>Pakistan</option>
                  <option>Palau</option>
                  <option>Palestine State</option>
                  <option>Panama</option>
                  <option>Papua New Guinea</option>
                  <option>Paraguay</option>
                  <option>Peru</option>
                  <option>Philippines</option>
                  <option>Poland</option>
                  <option>Portugal</option>
                  <option>Qatar</option>
                  <option>Romania</option>
                  <option>Russia</option>
                  <option>Rwanda</option>
                  <option>Saint Kitts and Nevis</option>
                  <option>Saint Lucia</option>
                  <option>Saint Vincent and the Grenadines</option>
                  <option>Samoa</option>
                  <option>San Marino</option>
                  <option>Sao Tome and Principe</option>
                  <option>Saudi Arabia</option>
                  <option>Senegal</option>
                  <option>Serbia</option>
                  <option>Seychelles</option>
                  <option>Sierra Leone</option>
                  <option>Singapore</option>
                  <option>Slovakia</option>
                  <option>Slovenia</option>
                  <option>Solomon Islands</option>
                  <option>Somalia</option>
                  <option>South Africa</option>
                  <option>South Korea</option>
                  <option>South Sudan</option>
                  <option>Spain</option>
                  <option>Sri Lanka</option>
                  <option>Sudan</option>
                  <option>Suriname</option>
                  <option>Sweden</option>
                  <option>Switzerland</option>
                  <option>Syria</option>
                  <option>Tajikistan</option>
                  <option>Tanzania</option>
                  <option>Thailand</option>
                  <option>Timor-Leste</option>
                  <option>Togo</option>
                  <option>Tonga</option>
                  <option>Trinidad and Tobago</option>
                  <option>Tunisia</option>
                  <option>Turkey</option>
                  <option>Turkmenistan</option>
                  <option>Tuvalu</option>
                  <option>Uganda</option>
                  <option>Ukraine</option>
                  <option>United Arab Emirates</option>
                  <option>United Kingdom</option>
                  <option>United States of America</option>
                  <option>Uruguay</option>
                  <option>Uzbekistan</option>
                  <option>Vanuatu</option>
                  <option>Venezuela</option>
                  <option>Vietnam</option>
                  <option>Yemen</option>
                  <option>Zambia</option>
                  <option>Zimbabwe</option>
                </select>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-blue-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
                  placeholder="Phone Number"
                />
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="consent" required />
                <label htmlFor="consent" className="text-[#03143B] text-sm">
                  I agree to receive other communications from Cloudfresh. By
                  submitting this form, you confirm that you agree to the
                  storing and processing of your personal data by opsninja as
                  described in the Privacy Policy
                </label>
              </div>
              <button
                type="submit"
                className="w-50 bg-gradient-to-r from-[#03143B] to-[#3a5ca8] text-white font-bold py-3 px-8 rounded-full shadow hover:from-[#0ea5e9] hover:to-[#2f40b5] transition-all duration-200 text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
