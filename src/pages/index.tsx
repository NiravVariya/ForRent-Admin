import Head from "next/head";
import styles from "@/styles/Home.module.css";

import HomeStarter from "@/components/comman/HomeStarter";
import PopularCatering from "@/components/comman/PopularCatering";
import { Container } from "@chakra-ui/layout";
import HomeComman from "@/components/comman/HomeComman";
import useTranslation from "@/components/hooks/useTranslation";
import HomeCarousel from "@/components/Home/HomeCarousel";
import Gallery from "@/components/Home/Gallery";
export default function Home() {
  const { t } = useTranslation();


  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomeStarter />
      <Container maxW={"8xl"}>
        <PopularCatering />
        <HomeComman title={"hotels"}  t={t}/>
        <HomeComman title={"cateres"}  t={t}/>
      </Container>
        <HomeCarousel/>
        <Container maxW={"8xl"}>

          <Gallery t={t} title="Gallery"/>
        </Container>
    </>
  );
}
