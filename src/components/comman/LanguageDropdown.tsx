import React, { useState } from "react";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import iconImg from '@/../../public/assets/Group 51179.png'

const LanguageDropdown = () => {
 
 const router = useRouter()
  return (
    <Box cursor={"pointer"} p="0">
      <Menu>
        <MenuButton as={Box} px='0' py="2">
          <Image
            width={["30px",'30px','30px','40px']}
            src={
              iconImg.src
            }
            alt={"Language"}
          />
        </MenuButton>
        <MenuList>
          <MenuItem
            onClick={() => {
              router.push(router.asPath, router.asPath, {
                locale: "en",
              });
            }}
          >
            English
          </MenuItem>
          <MenuItem
            onClick={() => {
              router.push(router.asPath, router.asPath, {
                locale: "ar",
              });
            }}
          >
            Arabic
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageDropdown;