"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const logos = [
//   { src: "/images/slider.png", alt: "Google Compute Engine" },
//   { src: "/images/slider.png", alt: "Google Compute Engine" },
//   { src: "/images/slider.png", alt: "Google Compute Engine" },
//   { src: "/images/slider.png", alt: "Google Compute Engine" },
//   { src: "/images/slider.png", alt: "Google Compute Engine" },
//   { src: "/images/slider.png", alt: "Google Compute Engine" },
//   { src: "/images/slider.png", alt: "Google Compute Engine" },
//   { src: "/images/slider.png", alt: "Google Compute Engine" },
// ];

export default function LogoSlider({ logos = [] }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="py-10 px-4">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="px-4">
            <div className="rounded-xl flex justify-center items-center  px-6">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={150}
                objectFit="contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
