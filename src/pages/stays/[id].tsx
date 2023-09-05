import ContactCard from "@/components/comman/ContactCard";
import Services from "@/components/comman/Services";
import useTranslation from "@/components/hooks/useTranslation";
import Description from "@/components/stays/Description";
import Facilities from "@/components/stays/Facilities";
import Getintouch from "@/components/stays/Getintouch";
import HotelCarousel from "@/components/stays/HotelCarousel";
import SearchInput from "@/components/stays/SearchInput";
import { Box, Container, HStack } from "@chakra-ui/react";
import Head from "next/head";
import img from '@/../../public/assets/whatsapp.png'
import email from '@/../../public/assets/email.png'
import React, { useState } from "react";
import HomeCarousel from "@/components/Home/HomeCarousel";
import Question from "@/components/stays/Question";
import Review from "@/components/comman/Review/Review";

const StayDetail = () => {
  const {t} = useTranslation()
  interface Coordinates {
    lat: number;
    lng: number;
  }

  const [coordinates, setCoordinates] = useState<Coordinates>({
    lat:25.2048,
    lng: 55.2708,
  });
  return (
    <>
      <Head>
        <title>Hotel Name</title>
      </Head>
      <HotelCarousel />
      <Container maxW={"8xl"}>
        <SearchInput />
        <Description />
      </Container>
      <Box my="10">
        <Services />
      </Box>
      <Container maxW={"8xl"}>
        <Facilities />
        <Getintouch setCoordinates={setCoordinates} coordinates={coordinates} />
        <HStack my='20' flexDir={['column','column','row']} justifyContent={"space-evenly"}>
          <ContactCard t={t} img={img} title="user.phone" phone="+965 25673252"/>
          <ContactCard t={t} img={email} title="login.email" phone="Rent007@gmail.com"/>
        </HStack>
      </Container>
      <HomeCarousel/>
      <Container maxW={"8xl"}>
      <Review/>
      </Container>
      {/* <Question/> */}
    </>
  );
};

export default StayDetail;
