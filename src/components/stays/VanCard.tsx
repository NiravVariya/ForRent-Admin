import React from "react";
import van from "@/../../public/assets/van.png";
import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
const VanCard = () => {
  return (
    <>
      <HStack flexDir={'column'} alignItems={'center'}>
        <Avatar src={van.src} size={"2xl"} />
        <Text fontSize={'1.2rem'} textAlign={'center'} fontWeight={"bold"} color={"#80AAA8"}>
          Caravans
        </Text>
      </HStack>
    </>
  );
};

export default VanCard;
