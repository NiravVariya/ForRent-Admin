import { Box, Image, Heading, SimpleGrid, Button } from "@chakra-ui/react";
import React from "react";
import locationIcon from "@/../../public/assets/Group.png";
import homeImg from "@/../../public/assets/home.png";

interface PropsType {
  title: string;
  t: (key: string) => undefined | string;
}

const Gallery: React.FC<PropsType> = ({ title, t }) => {
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
        <SimpleGrid columns={[2, 4]} pos={"relative"} spacing={0}>
          <Image src={homeImg.src} />
          <Image src={homeImg.src} />
          <Image src={homeImg.src} />
          <Image src={homeImg.src} />
          <Button className="btn" color={"#80AAA8"}>
            {t("dashboard.viewall")}
          </Button>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Gallery;
