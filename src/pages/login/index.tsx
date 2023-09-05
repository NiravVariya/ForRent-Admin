import useTranslation from '@/components/hooks/useTranslation'
import { Box, Button, Container, HStack, Heading, Image, Input, Link, Text } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import {BsApple} from 'react-icons/bs'

const index = () => {
    const {t} = useTranslation()
  return (
    <>
       <Head>
        <title>Login Page</title>
        <meta name="description" content={`Login page`} />
      </Head>
      <Container
        display={"flex"}
       
        flexDir={"column"}
        justifyContent={"center"}
        maxW={["full", "600px"]}
        minH="container.md"
        p="5"
      >
        <HStack
          justifyContent={"space-between"}
          width={"full"}
          flexDir={["column", "column", "column", "row"]}
          alignItems={"center"}
          height={"full"}
        >
          <Box width={"full"} p='5'  boxShadow={' rgba(0, 0, 0, 0.1) 0px 4px 12px;'}>
            <Box display={"flex"} w="full" justifyContent={"center"}>
              {/* <Image
                w={"120"}
                style={{ objectFit: "cover" }}
                height={"120"}
                src={accountImg}
              /> */}
            </Box>
            <form  style={{ width: "100%" }}>
              <Heading
                my="6"
                fontSize={"28px"}
                textAlign={"center"}
                color={"#414042"}
              >
              {t("Login")}
              </Heading>
              <Text fontSize={"0.9rem"} textAlign={"center"}>
                {t("don't")} <span style={{color:"#80AAA8"}}>
                    {t("signup")}
                </span>
              </Text>
              <Box my="4" width={"full"}>
                <label htmlFor="email">{t("login.email")}</label>
                <Input
                  borderRadius={"md"}
                //   _focusVisible={"none"}
                //   value={values.email}
                //   onChange={handleChange}
                //   onBlur={handleBlur}
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("login.email")}
                />
                {/* {touched.email && touched.email ? (
                  <Text color={"red.700"}>{errors.email}</Text>
                ) : null} */}
              </Box>
              <Box my="4" width={"full"}>
                <label htmlFor="password">{t("login.password")}</label>
                <Input
                  name="password"
                //   _focusVisible={"none"}
                //   value={values.password}
                //   onChange={handleChange}
                //   onBlur={handleBlur}
                  id="password"
                  type="password"
                  placeholder={t("login.password.min")}
                />
                {/* {touched.password && touched.password ? (
                  <Text color={"red.700"}>{errors.password}</Text>
                ) : null} */}
              </Box>
            <HStack justifyContent={'space-between'}>
                <Text>
                    {t("rem")}
                </Text>
            <Text textAlign={"right"} color={'#80AAA8'} _hover={{ color: "#BB99C7" }}>
                <Link href={"/forgot"}>{t("login.forgotpassword")}</Link>
              </Text>
            </HStack>
              <Button
                my="2"
                // isLoading={loading}
                bgColor={"#80AAA8"}
                _hover={{ bgColor: "#4C7371" }}
                color={"white"}
                width={"100%"}
          
                type="submit"
              >
                {t("login.button")}
              </Button>
              <Button
                my="2"
                // isLoading={loading}
                variant={'outline'}
                color={'#80AAA8'}
                width={"100%"}
                type="submit"
              >
                {t("guest")}
              </Button>
            </form>
            <HStack my="3" w="full">
          <Box w="full" height={"2px"} bg={"blackAlpha.200"}></Box>
          <Text fontSize={"13px"}>{t("or")}</Text>
          <Box w="full" height={"2px"} bg={"blackAlpha.200"}></Box>
        </HStack>
            <HStack
          mx={"auto"}
          justifyContent={"center"}
          my="5"
          maxW={"container.sm"}
        >
          <Button
            borderColor={"blackAlpha.100"}
            padding={"10px"}
            border={"1px solid"}
            bg="white"
            borderRadius={"5px"}
            cursor={"pointer"}
          >
            <FcGoogle style={{ fontSize: "1.5rem" }} />
          </Button>

          <FaFacebookSquare
            style={{ fontSize: "2.6rem", cursor: "pointer", color: "#3D5A98" }}
          />
          <Button
            borderColor={"blackAlpha.100"}
            padding={"10px"}
            border={"1px solid"}
            bg="black"
            type="submit"
            borderRadius={"5px"}
            cursor={"pointer"}
          >
            <BsApple
              style={{
                fontSize: "1.5rem",
                color: "white",
              }}
            />
          </Button>
        </HStack>
          </Box>
        </HStack>
       
       
      </Container>
    </>
  )
}

export default index
