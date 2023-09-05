import { Button, HStack, Input, SimpleGrid } from "@chakra-ui/react";
import React, { LegacyRef, RefObject, useRef } from "react";
import useTranslation from "../hooks/useTranslation";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const checkOutRef = useRef<HTMLInputElement | null>(null);

  const { t } = useTranslation();
  return (
    <>
      <SimpleGrid columns={[2, 2, 2, 5]} my='16' spacing={6} w="full">
        <Input
          ref={ref}
          type="text"
          py="6"
          onFocus={() => ref.current && (ref.current.type = "date")}
          placeholder={t("checkin")}
        />
        <Input
          ref={checkOutRef}
          py="6"
          onFocus={() =>
            checkOutRef.current && (checkOutRef.current.type = "date")
          }
          type="text"
         
          focusBorderColor='#80AAA8'
          placeholder={t("checkout")}
        />
        <Input py="6"    focusBorderColor='lime' placeholder={t("adults")} type="number" />
        <Input py="6" placeholder={t("child")} type="number" />
        <Button bg="#80AAA8" py="6" color={"white"}>
          {t("search.hotel")}
        </Button>
      </SimpleGrid>
    </>
  );
};

export default SearchInput;
