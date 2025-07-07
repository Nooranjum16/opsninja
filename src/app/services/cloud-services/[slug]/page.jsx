"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import { cloudData } from "@/APIdata/cloudData";

// import icons dynamically
import * as FaIcons from "react-icons/fa";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export default function CloudServiceDetailPage() {
  const { slug } = useParams();

  const pageData = cloudData.find((item) => item.slug === slug);

  if (!pageData) return notFound();

  return (
    <>
      {/* Header */}
      <div className="bg-[#F2F4F7] py-12 text-center">
        <h1 className="text-4xl font-bold text-[#34A753]">{pageData.title}</h1>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          {pageData.intro || "Explore this service below"}
        </p>
      </div>

      {/* Services Cards */}
      <div className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pageData.services.map((service, index) => {
            const Icon = FaIcons[service.icon];
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-left hover:shadow-xl transition"
              >
                <div className="mb-4 text-[#FABB05]">
                  {Icon && <Icon className="text-2xl" />}
                </div>
                <h3 className="text-xl font-semibold text-[#03143B] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Optional Tabs - Static Example */}
      <TabGroup as="div" className="max-w-6xl mx-auto px-4 py-10">
        <TabList className="flex flex-wrap gap-4 justify-center border-b-2 border-gray-200 pb-4 mb-6">
          {["Rehost", "Replace", "Rebuild", "Rearchitect", "Refactor"].map(
            (tab, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  `px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
           ${
             selected
               ? "bg-[#34a753] text-white shadow-lg scale-105"
               : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-300"
           }`
                }
              >
                {tab}
              </Tab>
            )
          )}
        </TabList>

        <TabPanels className="bg-gray-50 p-6 rounded-xl shadow-sm text-gray-800 leading-relaxed">
          <TabPanel>
            <p>
              <strong>Rehost</strong> – Move your apps without changing their
              core architecture.
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <strong>Replace</strong> – Swap components for better
              functionality.
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <strong>Rebuild</strong> – Rewrite applications from scratch using
              modern tools.
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <strong>Rearchitect</strong> – Change the underlying architecture
              for scalability.
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <strong>Refactor</strong> – Improve code without changing what it
              does.
            </p>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
}
