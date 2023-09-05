import {
  Box,
  Button,
  HStack,
  Image,
  Text,
  useDisclosure,
  UseDisclosureReturn,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect } from "react";
import {RxHamburgerMenu} from 'react-icons/rx'
import { FiSearch } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import useTranslation from "../hooks/useTranslation";
import MobileNav from "../comman/MobileNav";
import LanguageDropdown from "../comman/LanguageDropdown";
import { useRouter } from "next/router";


let logo :string= 'https://firebasestorage.googleapis.com/v0/b/for-rent-3866d.appspot.com/o/Group%2037338.svg?alt=media&token=5188cc4e-c0ac-4765-90c2-f48b7f72430f'

const Header = () => {

  const { t } = useTranslation();
  const paths = [
    {
      link: "/",
      name: t("home"),
    },
    {
      link: "/stays",
      name: t("stay"),
    },
    {
      link: "/catering",
      name: t("catering"),
    },
    {
      link: "/games",
      name: t("game"),
    },
    {
      link: "/about",
      name: t("about.aboutus"),
    },
    {
      link: "/about",
      name: t("navbar.contact"),
    },
  ];
  const { isOpen, onOpen, onClose }: UseDisclosureReturn = useDisclosure();
  const router = useRouter()
  useEffect(() => {
    let dir = router.locale === "ar" ? "rtl" : "ltr";
    let lang = router.locale === "ar" ? "ar" : "en";
    document.querySelector("html")?.setAttribute("dir", dir);
    document.querySelector("html")?.setAttribute("lang", lang);
  }, [router?.locale]);
  return (
    <>
      <HStack
      
        p={"10px"}
        mx={"auto"}
        justifyContent={"space-between"}
        alignItems={"center"}
        maxW={"container.xl"}
      >
        <Link href={'/'}>
        <Image src={logo} width={'100px'} alt="Logo" />
        </Link>
        <Box display={["none", "none", "none", "flex"]}  alignItems={"center"}>
          {paths?.map((res, i) => {
            return (
              <Text
                _hover={{ borderBottom: "1px solid", color: "#80AAA8" }}
                borderColor={"#80AAA8"}
                key={i}
                color={router.pathname == res.link ? '#80AAA8':"black"}
                borderBottom={router.pathname == res.link ? '1px solid':"none"}
                borderBottomColor={'#80AAA8'}
                mx="9"
                listStyleType={"none"}
              >
                <Link href={res.link}>{res.name}</Link>
              </Text>
            );
          })}
        </Box>
       
        <HStack gap={[5,5,9]} alignItems={"center"}>
          <FiSearch cursor={"pointer"} fontSize={"1.3rem"} />
          <AiFillHeart cursor={"pointer"} fontSize={"1.3rem"} />
          <VscAccount cursor={"pointer"} fontSize={"1.3rem"} />
          <LanguageDropdown/>
         
        </HStack>
        <Button display={['block','block','block','none']} colorScheme="teal" onClick={onOpen}>
            <RxHamburgerMenu/>
          </Button>
      </HStack>
    
      <MobileNav isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header;
