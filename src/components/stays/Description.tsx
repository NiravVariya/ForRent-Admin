import { Box, HStack, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import locationImg from "@/../../public/assets/Frame 51236.png";
import star from "@/../../public/assets/star.png";
import useTranslation from "../hooks/useTranslation";

const Description = () => {
    const {t} = useTranslation()
  return (
    <>
      <HStack justifyContent={"space-between"} my="5">
        <Box>
          <Heading fontWeight={600} fontSize={"1.3rem"}>
            The Ritz-Carlton
          </Heading>
          <HStack my="4">
            <Image src={locationImg.src} />
            <Text>Kuwait</Text>
          </HStack>
          <HStack my="4">
            <Image src={star.src} />
            <Text>3.5</Text>
          </HStack>
        </Box>
        <Box>
          <Heading color={'#80AAA8'} fontWeight={600} mb='2' fontSize={"1.2rem"}>
            KWD 700
          </Heading>
          <Text my='2' color={'blackAlpha.700'}>Day/Night</Text>
        </Box>
      </HStack>
      <Box mb={'4'}>
        <Text fontWeight={600} fontSize={'1.4rem'} color={'#80AAA8'}>
            {t("article.form.descriptionlabel")}
        </Text>
        <Text my='2' color={'blackAlpha.700'} fontSize={'1rem'} fontWeight={500}>
        Hotel Booking System is complete Hotel Booking IT Solution comes with Hotel Quotation Booking System for travel agent, tour operator and hotel chains to collect the inventory of hotels from multiple sources to present their clients with the best prices including bedbanks and channel managers and direct contracts.Technoheaven is a leading Travel Software Development Company offers the best Hotel Booking Software with the key role of Hotel Extranet, OTH, Hotel XML IN, Hotel XML Out and Hotel Channel Manager for hotels to automate day-to-day hotel management operations and maximize revenues.
        </Text>
      </Box>
    </>
  );
};

export default Description;
