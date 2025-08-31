"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import image1 from "@/assets/images/img_slider_1.jpg";
import image2 from "@/assets/images/img_slider_2.jpg";
import image3 from "@/assets/images/img_slider_3.jpg";
import image4 from "@/assets/images/img_slider_4.jpg";
import image_mobile_1 from "@/assets/images/img_slider_mobile_1.jpg";
import image_mobile_2 from "@/assets/images/img_slider_mobile_2.jpg";
import image_mobile_3 from "@/assets/images/img_slider_mobile_3.jpg";
import image_mobile_4 from "@/assets/images/img_slider_mobile_4.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { JSX } from "react/jsx-runtime";

interface ImageData {
  src: StaticImageData;
}

const desktopImages: ImageData[] = [
  { src: image1 },
  { src: image2 },
  { src: image3 },
  { src: image4 },
];

const mobileImages: ImageData[] = [
  { src: image_mobile_1 },
  { src: image_mobile_2 },
  { src: image_mobile_3 },
  { src: image_mobile_4 },
]

export default function ImageSlider(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
    useEffect(() => {
      const checkIsMobile = (): boolean => {
        return window.innerWidth <= 768; // Common breakpoint for mobile devices
      };
      const handleResize = (): void => {
        setIsMobile(checkIsMobile());
        // Reset index when switching between mobile/desktop to avoid out-of-bounds
        setCurrentIndex(0);
      };

      // Initial check
      setIsMobile(checkIsMobile());

      // Add resize listener
      window.addEventListener('resize', handleResize);
      
      // Cleanup
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  const images = isMobile ? mobileImages : desktopImages;
  
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, images.length]);

  const handleMouseOver = (): void => setIsHovered(true);
  const handleMouseLeave = (): void => setIsHovered(false);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div
        className="relative w-full h-full group"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          fill
          style={{ objectFit: "cover" }}
          className="transition-all duration-500 ease-in-out"
          priority
        />
      </div>

      {/* Botón izquierdo */}
      <button
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white p-1 sm:p-2 group z-10 cursor-pointer"
        onClick={prevSlide}
      >
        <ChevronLeft className="text-white w-6 h-6 sm:w-10 sm:h-10 opacity-80 hover:opacity-100" />
      </button>

      {/* Botón derecho */}
      <button
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white p-1 sm:p-2 group z-10 cursor-pointer"
        onClick={nextSlide}
      >
        <ChevronRight className="text-white w-6 h-6 sm:w-10 sm:h-10 opacity-80 hover:opacity-100" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center z-10 cursor-pointer">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-6 sm:w-10 mx-0.5 sm:mx-1 ${index === currentIndex
                ? "bg-[#beff46] rounded-xl"
                : "bg-gray-300 rounded-xl"
              } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
}
