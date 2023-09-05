import { Box, HStack, Progress, Text } from "@chakra-ui/react";
import React from "react";
import useTranslation from "../hooks/useTranslation";

const Facilities = () => {
  const { t } = useTranslation();
  return (
    <>
      <Box my='5' position={"relative"}>
        <Progress
          borderRadius={"full"}
          colorScheme="green"
          size="sm"
          value={50}
          height="40px"
        />

        <Text position={"absolute"} color={"white"} left={"23"} top={"2"}>
          {t("clean")}
        </Text>
      </Box>
      <Box my='5' position={"relative"}>
        <Progress
          borderRadius={"full"}
          colorScheme="yellow"
          size="sm"
          value={40}
          height="40px"
        />

        <Text position={"absolute"} color={"white"} left={"23"} top={"2"}>
          {t("comfort")}
        </Text>
      </Box>
      <Box my='5' position={"relative"}>
        <Progress
          borderRadius={"full"}
          colorScheme="blue"
          size="sm"
          value={60}
          height="40px"
        />

        <Text position={"absolute"} color={"white"} left={"23"} top={"2"}>
          {t("facilities")}
        </Text>
      </Box>
    </>
  );
};

export default Facilities;
