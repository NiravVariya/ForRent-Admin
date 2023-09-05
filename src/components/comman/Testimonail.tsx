import { Box, Text, Image, Avatar, HStack } from "@chakra-ui/react";
import React from "react";

interface PropsType {
  des: string;
  profile: any;
  email: string;
  name: string;
}
const Testimonail: React.FC<PropsType> = ({ des, profile, email, name }) => {
  return (
    <>
      <Box px={['3','3','3','0']} my="0">
        <Text
          w={['100%','100%','100%',"65%"]}
          mx="auto"
          mb="3"
          color={"blackAlpha.700"}
          textAlign={"center"}
        >
          {des}
        </Text>
        <HStack w='full' justifyContent={'center'}>
        <Avatar mx="auto" textAlign={'center'}  size={'2xl'} src={profile.src} />
        </HStack>
        <Text mx="auto" my="2" textAlign={"center"} color={"blackAlpha.900"}>
          {name}
        </Text>
        <Text mx="auto" mb="8" textAlign={"center"} color={"blackAlpha.900"}>
          {email}
        </Text>
      </Box>
    </>
  );
};

export default Testimonail;
