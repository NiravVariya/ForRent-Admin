import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";


interface PropsType{
    title:string;
    phone:string;
    t:(key:string)=>string | undefined;
    img:any
}

const ContactCard:React.FC<PropsType> = ({title,phone,img,t}) => {
  return (
    <>
      <Box
        p="5"
        pt='20'
        w="300px"
        height={"250px"}
        bg="#F3F3F6"
        borderRadius={"md"}
        border={"1px solid"}
        pos={'relative'}
        borderColor={"blackAlpha.400"}
      >
        <Text fontWeight={"bold"} textAlign={"center"} fontSize={"1.3rem"}>
          {t(title)}
        </Text>
        <Text my='5' textAlign={"center"} fontSize={"1.3rem"}>{phone}</Text>
        <Image src={img.src} w='70px' pos={'absolute'} className="icon" top={'-8'} left={'50%'}/>
      </Box>
    </>
  );
};

export default ContactCard;
