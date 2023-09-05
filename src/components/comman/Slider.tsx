import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img from "@/../../public/assets/Stay.png";

const handleDragStart = (e: React.DragEvent<HTMLImageElement>): void => {
  e.preventDefault();
};

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const items = [
  <img src={img.src} onDragStart={handleDragStart} role="img" />,
  <img src={img.src} onDragStart={handleDragStart} role="img" />,
  <img src={img.src} onDragStart={handleDragStart} role="img" />,
];

const Gallery = () => {
  return (
    <AliceCarousel
      disableButtonsControls
      responsive={responsive}
      mouseTracking
      items={items}
    />
  );
};

export default Gallery;
