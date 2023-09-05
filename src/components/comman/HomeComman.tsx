import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import locationIcon from "@/../../public/assets/Group.png";
import HotelCard from "../Home/TopHotels/HotelCard";
import img from "@/../../public/assets/Frame02.png";

interface Propstype {
  t: (key: string) => string | undefined;
  title: string;
}

const HomeComman: React.FC<Propstype> = ({ title, t }) => {
  const arr = [
    {
      title: "Hotel Name ,Place",
      img,
      des: "Luxurious 2BHK Room with Rooms",
      price: 50,
    },
    {
      title: "Hotel Name ,Place",
      img,
      des: "Luxurious 2BHK Room with Rooms",
      price: 150,
    },
    {
      title: "Hotel Name ,Place",
      img,
      des: "Luxurious 2BHK Room with Rooms",
      price: 500,
    },
    {
      title: "Hotel Name ,Place",
      img,
      des: "Luxurious 2BHK Room with Rooms",
      price: 580,
    },
  ];
  return (
    <>
      <Box my="10" w="full">
        <Image mx="auto" src={locationIcon.src} />
        <Heading
          fontWeight={500}
          textAlign={"center"}
          my="5"
          fontSize={"1.5rem"}
          color={"blackAlpha.800"}
        >
          {t(title)}
        </Heading>
        <SimpleGrid columns={[1, 1, 2, 4]} spacing={5}>
          {arr.map((res, i: number) => {
            return (
              <HotelCard
               
                key={i}
                title={res.title}
                img={res.img}
                des={res.des}
                price={res.price}
              />
            );
          })}
        </SimpleGrid>
        <HStack justifyContent={"center"}>
          <Button my="5" color={"#80AAA8"} variant={"outline"}>
            {t("dashboard.viewall")}
          </Button>
        </HStack>
      </Box>
    </>
  );
};

export default HomeComman;
