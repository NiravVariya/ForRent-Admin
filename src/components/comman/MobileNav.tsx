import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, ListItem, Text, UnorderedList, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"
import useTranslation from "../hooks/useTranslation";
import Link from "next/link";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default  function MobileNav({isOpen,onClose}:MobileNavProps) {
  const btnRef = useRef<HTMLButtonElement | null>(null);
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
    return (
      <>
    
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
  
            <DrawerBody>
            <UnorderedList
              mt="1.4rem"
              display={"flex"}
              flexDir={"column"}
              h="90%"
              justifyContent={"center"}
              alignItems={"center"}
            >
          {paths?.map((res, i) => {
            return (
                <ListItem
                onClick={onClose}
                key={i}
                m="4"
                _hover={{ borderBottom: "1px solid" }}
                fontSize={"1.1rem"}
                listStyleType={"none"}
              >
             
                  <Link href={res.link}>{res.name}</Link>
                </ListItem>
            );
          })}
     </UnorderedList>
            </DrawerBody>
  
            {/* <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </>
    )
  }