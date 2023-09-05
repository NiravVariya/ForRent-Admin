import React, { useState } from "react";
import img from "@/../../public/assets/Group.png";
import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import useTranslation from "../hooks/useTranslation";
import ServiceCard from "../stays/ServiceCard";
import Gallery from "../Home/Gallery";

const Services = () => {
  const { t } = useTranslation();

 
  return (
    <>
      <Box p="2" mb="14" bg="#F3F3F6" w="full">
        <Image mx="auto" my="7" src={img.src} />
        <Text
         fontWeight={500}
         textAlign={"center"}
         my="5"
         fontSize={"1.5rem"}
         color={"blackAlpha.800"}
          children={t("navbar.service")}
        />
        <Container maxWidth={"8xl"}>
          <SimpleGrid w="full" my="5" spacing={3} columns={[1, 1, 2, 4]}>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </SimpleGrid>
        </Container>
      </Box>
      
    </>
  );
};

export default Services;
