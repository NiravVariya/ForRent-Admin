import React from "react";
import hotel from "@/../../public/assets/hotel.jpg";
import hotel2 from "@/../../public/assets/hotel2.jpg";
import { Box, Image } from "@chakra-ui/react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const HotelCarousel = () => {
  const myImages = [hotel.src, hotel2.src];

  const renderCustomDots = (currentSlide, currentIndex, items) => {
    return items.map((item, index) => (
      <span
        key={index}
        className={`custom-dot ${currentIndex === index ? "active" : ""}`}
      ></span>
    ));
  };
  return (
    <>
     <Box pos={'relative'}>
     <AliceCarousel
        disableButtonsControls
        disableDotsControls
        renderDotsItem={renderCustomDots}
        infinite
        autoPlay
        
        animationDuration={3000}
        mouseTracking
      >
        {myImages.map((res, i) => {
          return <Image w='full' height={['auto','auto','auto','70vh']}  src={res} key={i} />
        })}
      </AliceCarousel>
     </Box>
    </>
  );
};

export default HotelCarousel;
