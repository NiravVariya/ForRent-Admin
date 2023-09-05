import { Box, Grid, GridItem, HStack, Heading, Image } from "@chakra-ui/react";
import React from "react";
import women from "@/../../public/assets/women.png";
import women2 from "@/../../public/assets/wonenPic.png";
import HomeSlider from "./HomeSlider";
import useTranslation from "../hooks/useTranslation";
import { useRouter } from "next/router";

const HomeCarousel = () => {
  const { t } = useTranslation();

  const router = useRouter()
  return (
    <>
      <HStack w="full" bg="#EBF8FF" pb='6' justifyContent={"space-between"}>
        <Box w={["100%", "100%", "100%", "60%"]}>
          <Heading
            fontWeight={800}
            my='5'
            color="blackAlpha.700"
            fontSize={"1.5rem"}
            textAlign={"center"}
          >
            {t("people")}
          </Heading>
          <HomeSlider />
        </Box>

        <Box display={["none",'none','none','block']}>
          <Image src={router.locale !== 'en'?  women2.src:women.src} />
        </Box>
      </HStack>
    </>
  );
};

export default HomeCarousel;
