import React from "react";
import wifi from "@/../../public/assets/wifi.png";
import { Box, Image, Text } from "@chakra-ui/react";
const ServiceCard = () => {
  return (
    <>
      <Box>
        <Image mx="auto" src={wifi.src} />
        <Text
          fontWeight={"bold"}
          my="2"
          textAlign={"center"}
          fontSize={"1.3rem"}
          color={"#80AAA8"}
        >
          Wifi
        </Text>
        <Text textAlign={"center"} fontWeight={"500"} color={"blackAlpha.600"}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus dicta
          officiis porro, eius, vero culpa praesentium provident facilis quam
          aperiam at. Nemo quo praesentium accusantium quia sed amet, nihil hic.
        </Text>
      </Box>
    </>
  );
};

export default ServiceCard;
