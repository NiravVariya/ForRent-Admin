import React from "react";
import Location from "../Location";
import { Box, HStack, Text, useDisclosure } from "@chakra-ui/react";
import useTranslation from "@/components/hooks/useTranslation";
import ReviewForm from "./ReviewForm";

const Review = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box my="10">
        <Location title="Ratings & Reviews" />
        <HStack justifyContent={"space-between"}>
          <Text></Text>
          <Text
            fontSize={"1.2rem"}
            color={"#80AAA8"}
            borderBottom={"1px solid"}
          >
            {t("add.review")}
          </Text>
        </HStack>
        <ReviewForm onClose={onClose} isOpen={isOpen}/>
      </Box>
    </>
  );
};

export default Review;
