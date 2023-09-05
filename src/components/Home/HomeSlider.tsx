import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Testimonail from "../comman/Testimonail";
import img from "@/../../public/assets/gg.jpeg";
import { useRouter } from "next/router";
const HomeSlider = () => {

  const router = useRouter()
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  let des =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit libero optio accusamus rem placeat totam, veniam saepe in ratione aliquam sint amet facilis, nihil accusantium mollitia impedit numquam, explicabo maxime.";

  return (
    <>
      <Carousel
        showDots={true}
        autoPlaySpeed={2500}
        autoPlay={true}
        infinite={true}
        dotListClass="dot"
        rtl={router.locale !== 'en' && true}
        removeArrowOnDeviceType={[
          "tablet",
          "mobile",
          "desktop",
          "superLargeDesktop",
          "mobile",
        ]}
        responsive={responsive}
      >
        <Testimonail
          profile={img}
          des={des}
          email="tester@gamail.com"
          name="Tester"
        />
        <Testimonail
          profile={img}
          des={des}
          email="tester@gamail.com"
          name="Tester"
        />
        <Testimonail
          profile={img}
          des={des}
          email="tester@gamail.com"
          name="Tester"
        />
        <Testimonail
          profile={img}
          des={des}
          email="tester@gamail.com"
          name="Tester"
        />
      </Carousel>
    </>
  );
};

export default HomeSlider;
