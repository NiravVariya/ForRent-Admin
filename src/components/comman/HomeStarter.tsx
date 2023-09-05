import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import useTranslation from "../hooks/useTranslation";
import { useRouter } from "next/router";

import myImg from "../../../public/assets/im.png";
import myImg2 from "../../../public/assets/IMAGE.png";
import locationImg from "../../../public/assets/Group.png";
import banner from "../../../public/assets/Frame.png";
import PopularCatering from "@/components/comman/PopularCatering";

const HomeStarter = () => {
  const { t } = useTranslation();
  let img: string =
    "https://firebasestorage.googleapis.com/v0/b/for-rent-3866d.appspot.com/o/pl.svg?alt=media&token=9375e402-cf6d-454c-a4b9-24b7f2bda9ef";

    const router = useRouter();
  return (
    <>
      <Container
        px="0"
        pos={["static", "static", "static", "relative"]}
        top={0}
        opacity={0.9}
        bgImage={[banner.src, banner.src, banner.src, ""]}
        minH={["auto", "auto", "auto", "container.sm"]}
        bgRepeat={"no-repeat"}
        display={"flex"}
        maxW={"full"}
      >
        <Box
          w="full"
          bgColor={[
            "blackAlpha.500",
            "blackAlpha.500",
            "blackAlpha.500",
            "white",
          ]}
          my="20"
        >
          <Box display={["none", "none", "none", "block"]} my="5">
            <Image alt="banner" src={router.locale !== "en" ? myImg.src : myImg2.src} />
          </Box>
          <Box
            textAlign={["center", "center", "center", "left"]}
            width={["auto", "auto", "auto", "500px"]}
            mx="auto"
          >
            <Text
              color={["white", "white", "white", "blackAlpha.800"]}
              my="3"
              fontWeight={500}
            >
              {t("luxry")}
            </Text>
            <Heading color={["white", "white", "white", "blackAlpha.800"]}>
              {t("find.hotel")} <span className="text">{t("hotel")}</span>{" "}
              {t("and")} <span className="text">{t("categoring")}</span>
            </Heading>
            <Text
              color={["white", "white", "white", "blackAlpha.800"]}
              fontWeight={500}
              my="3"
            >
              {t("des")}
            </Text>
            <Button
              my="5"
              boxShadow={
                "gba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
              }
              color={"white"}
              bg="#80AAA8"
            >
              {t("about.aboutus")}
            </Button>
          </Box>
        </Box>
        <Box
          height={"700px"}
          width={"full"}
          display={["none", "none", "none", "block"]}
          bgImage={banner.src}
        ></Box>
        {/* Popular catering */}
      </Container>
    </>
  );
};

export default HomeStarter;
