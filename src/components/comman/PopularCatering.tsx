import { Box, Grid, Image, Heading, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import img from "@/../../public/assets/Stay.png";
import locationIcon from "@/../../public/assets/Group.png";
import useTranslation from "../hooks/useTranslation";
import { useRouter } from "next/router";

const PopularCatering = () => {
  const { t } = useTranslation();

  const router = useRouter()

  return (
    <>
      <Box display={["none", "none", "block"]} my="10">
        <Image mx="auto" src={locationIcon.src} />
        <Heading
          fontWeight={500}
          textAlign={"center"}
          my="3"
          fontSize={"1.5rem"}
          color={"blackAlpha.800"}
        >
          {t("popular")}
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" pos="relative" gap={4}>
          <Box w="400px" className="box" pos="relative">
            <Image
              w="full"
              _hover={{ border: "2px solid #80AAA8" }}
              cursor={"pointer"}
              src={img.src}
            />

            <Button onClick={()=>{
              router.push('/stays')
            }} className="button">{t("stay")}</Button>
          </Box>
          <Box w="400px" className="box" pos="relative">
            <Image
              w="full"
              _hover={{ border: "2px solid #80AAA8" }}
              cursor={"pointer"}
              src={img.src}
            />

            <Button onClick={()=>{
              router.push('/catering')
            }} className="button">{t("categoring")}</Button>
          </Box>
          <Box w="400px" className="box" pos="relative">
            <Image
              w="full"
              _hover={{ border: "2px solid #80AAA8" }}
              cursor={"pointer"}
              src={img.src}
            />

            <Button onClick={()=>{
              router.push('/games')
            }} className="button">{t("game")}</Button>
          </Box>
        </Grid>
      </Box>
      <Box my="10" display={["block", "block", "none"]}>
        <Image mx="auto" src={locationIcon.src} />
        <Heading
          fontWeight={500}
          textAlign={"center"}
          my="3"
          fontSize={"1.5rem"}
          color={"blackAlpha.800"}
        >
          {t("popular")}
        </Heading>
        {/* <Gallery /> */}
      </Box>
    </>
  );
};

export default PopularCatering;
