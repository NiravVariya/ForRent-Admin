import Gallery from "@/components/Home/Gallery";
import HomeCarousel from "@/components/Home/HomeCarousel";
import HomeComman from "@/components/comman/HomeComman";
import HomeStarter from "@/components/comman/HomeStarter";
import Services from "@/components/comman/Services";
import useTranslation from "@/components/hooks/useTranslation";
import GoogleMapReact from "@/components/stays/GoogleMap";
import SearchInput from "@/components/stays/SearchInput";
import VanCard from "@/components/stays/VanCard";
import { Container, SimpleGrid } from "@chakra-ui/react";
import Head from "next/head";
import React, { useState } from "react";

const index = () => {
  const { t } = useTranslation();

  interface Coordinates {
    lat: number;
    lng: number;
  }

  const [coordinates, setCoordinates] = useState<Coordinates>({
    lat: 25.276987,
    lng: 55.296249,
  });
  const [address, setAddress] = useState<string>("");
  return (
    <>
      <Head>
        <title>Stays</title>
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
        <Container pb="10" maxWidth={"8xl"}>
        <GoogleMapReact
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          address={address}
          setAddress={setAddress}
        />
      </Container>
      <HomeCarousel />
      <Container pb="10" maxWidth={"8xl"}>
        <Gallery t={t} title="Gallery"/>

      </Container>
    
    </>
  );
};

export default index;
