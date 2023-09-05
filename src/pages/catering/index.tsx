import HomeComman from "@/components/comman/HomeComman";
import HomeStarter from "@/components/comman/HomeStarter";
import Services from "@/components/comman/Services";
import useTranslation from "@/components/hooks/useTranslation";
import SearchInput from "@/components/stays/SearchInput";
import VanCard from "@/components/stays/VanCard";
import { Container, SimpleGrid } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const index = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Catering</title>
      </Head>
      <HomeStarter />
      <Container maxW={"8xl"} my="10">
        <SearchInput />
        <SimpleGrid w="full" my="16" columns={[2, 1, 4, 4]}>
          <VanCard />
          <VanCard />
          <VanCard />
          <VanCard />
        </SimpleGrid>
        <HomeComman t={t} title="top" />
      </Container>
      <Services />
    </>
  );
};



export default index;
