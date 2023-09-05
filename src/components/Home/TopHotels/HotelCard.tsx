import { Box, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import img from "@/../../public/assets/Frame02.png";
import { AiFillHeart } from "react-icons/ai";
import { Skeleton } from "@chakra-ui/react";
import Link from "next/link";

interface PropsType{
    img:any;
    title:string;
    des:string;
    price:number
}

const HotelCard:React.FC<PropsType> = ({
    img,
    title,
    des,price
}) => {
  const [loading, setLoading] = useState<boolean>(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);


  return (
    <>
      {loading ? (
        <Skeleton w="full" height={"250px"} />
      ) : (
      <Link href={'/stays/1'}>
        <Box borderRadius={"5px"} pos={"relative"}>
          <Image w="full" src={img.src} borderRadius={"5px"} pos={"relative"} />

          <Box
            pos={"absolute"}
            fontSize={"1.2rem"}
            cursor={"pointer"}
            color={"#80AAA8"}
            top={2}
            bg="white"
            p={"3px"}
            borderRadius={"full"}
            right={"10px"}
          >
            <AiFillHeart />
          </Box>
          <Box p="1.5" pos={"absolute"} bottom={"10px"}>
            <Text fontSize={"1.4rem"} fontWeight={"bold"} color={"#80AAA8"}>
              {title}
            </Text>
            <Text fontSize={"1rem"} fontWeight={500} color={"#fff"}>
              {des}
            </Text>
            <Text fontSize={"1rem"} fontWeight={500} color={"#80AAA8"}>
              KWD {price} <span style={{ color: "white" }}>night</span>
            </Text>
          </Box>
        </Box>
      </Link>
      )}
    </>
  );
};

export default HotelCard;
