import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
  Image,
  HStack,
  ListItem,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Logo } from "./Logo";
import { AiFillYoutube } from "react-icons/ai";
import { BiLogoFacebookSquare } from "react-icons/bi";
import facebook from "@/../../public/assets/facebook.png";
import twitter from "@/../../public/assets/twit.png";
import insta from "@/../../public/assets/instagram.png";
import linkdin from "@/../../public/assets/linkdin.png";
import Link from "next/link";
import useTranslation from "@/components/hooks/useTranslation";

let logourl: string =
  "https://firebasestorage.googleapis.com/v0/b/for-rent-3866d.appspot.com/o/Group%2037338.svg?alt=media&token=5188cc4e-c0ac-4765-90c2-f48b7f72430f";

const Footer = () => {
  const { t } = useTranslation();

  const links = [
    {
      title: t("acc"),
      links: [
        { label: t("home"), href: "#" },
        { label: t("about.aboutus"), href: "#" },
        { label: t("navbar.contact"), href: "#" },
        { label: t("mission"), href: "#" },
      ],
    },
    {
      title: t("leagls"),
      links: [
        { label: t("about.privacypolicy"), href: "#" },
        { label: t("about.termsandcondition"), href: "#" },
      ],
    },
    {
      title: t("navbar.contact"),
      links: [
        { label: "+91 1234567891", href: "#" },
        { label: "Rent007@gmail.com", href: "#" },
      ],
    },
  ];
  return (
    <Box bg="black" color={"white"}>
      <Container as="footer" maxW={"8xl"} role="contentinfo">
        <Stack
          justify="space-between"
          align="start"
          direction={{ base: "column", lg: "row" }}
          py={{ base: "12", md: "16" }}
          spacing="8"
        >
          <Stack spacing={{ base: "6", md: "8" }} align="start">
            {/* <Logo /> */}
            <Image src={logourl} />
            <Text w="full" color="fg.muted">
            {t("text")}
            </Text>
            <HStack fontSize={"2rem"} color={"red"}>
              <Image cursor={"pointer"} h="28px" mx="2" src={twitter.src} />
              <Image h="30px" mx="2" cursor={"pointer"} src={facebook.src} />
              <Image h="30px" mx="2" src={insta.src} cursor={"pointer"} />
              <Image h="30px" mx="2" src={linkdin.src} cursor={"pointer"} />
              <AiFillYoutube />
            </HStack>
          </Stack>
          <SimpleGrid
            p="4"
            columns={[2, 2, 3, 3]}
            width={{ base: "full", lg: "full" }}
          >
            {links.map((group, idx) => (
              <Stack
                key={idx}
                spacing={["0", "8"]}
                my="5"
                maxW={["full"]}
                w="full"
                minW={{ lg: "300px" }}
              >
                <Text fontSize="1.2rem" fontWeight="semibold" color="fg.subtle">
                  {group.title}
                </Text>
                <Stack shouldWrapChildren>
                  {group.links.map((link, idx) => (
                    <Text my="1">
                      <Link key={idx} href={link.href}>
                        {link.label}
                      </Link>
                    </Text>
                  ))}
                </Stack>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
        <Divider />
        <Stack
          pt="8"
          pb="12"
          justify="space-between"
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
        >
          <Text fontSize="sm" mx="auto" color="fg.subtle">
            &copy; {new Date().getFullYear()} {t("for.rent")}
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
