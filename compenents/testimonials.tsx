"use client";

import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
      _hover={{
        bottom: "16px",
        boxShadow: "5px 5px 48px red}",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h1"} fontSize={"xl"} color="red.500">
      {children}
    </Heading>
  );
};

const TestimonialSubHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading
      as={"h5"}
      fontSize={"l"}
      color={useColorModeValue("gray.600", "gray.400")}
    >
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      fontSize={"sm"}
      color={useColorModeValue("black", "black")}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading color="red.500">Program of Studies</Heading>
          <Text p="32px 88px 24px 88px">
            This curriculum is intended for beginners who want to learn software
            development from the ground up. The first two quarters are shared by
            all specialities and are dedicated to studying Object-Oriented
            Programming and cutting-edge Full-Stack Web 2.0 development. It is
            going to be a year-long hybrid programme that includes both onsite
            and online classes and is divided into four quarters of 13 weeks
            each. The emphasis will be on hands-on learning by educating
            students to produce projects. To accommodate everyone, courses will
            be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on
            weekdays. It employs a hybrid teaching format, with core onsite
            classes complemented by online Zoom laboratories and recorded
            videos.
          </Text>
        </Stack>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Core Courses</TestimonialHeading>
              <TestimonialSubHeading>
                Every participant of the program will start by completing the
                following two core courses:
                <TestimonialText>
                  <br />
                  <br />
                  Quarter I (Core) CS-101: Object-Oriented Programming using
                  TypeScript.
                  <br />
                  <br />
                  Quarter II (Core) W2-201: Developing Planet-Scale Web 2.0
                  Serverless Cloud Cloud Apps and APIs using Next.js 13 and
                  Cloud Development Kit (CDK) for Terraform.
                </TestimonialText>
              </TestimonialSubHeading>
            </TestimonialContent>
            {/* <TestimonialAvatar
            src={"/images/ZiaUKhan.jpeg"}
            name={"Zia Khan"}
            title={"CEO at ABC Corporation"}
          /> */}
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Specializations</TestimonialHeading>
              <TestimonialSubHeading>
                After completing the first two quarters the participants will
                select one or more specializations consisting of two courses
                each:
                <TestimonialText>
                  <br />
                  <br />
                  Web3.0
                  <br />
                  AI
                  <br />
                  CNC
                  <br />
                  BCC
                </TestimonialText>
              </TestimonialSubHeading>
            </TestimonialContent>
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
