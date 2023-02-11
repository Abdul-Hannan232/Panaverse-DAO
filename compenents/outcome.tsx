import React, { ReactNode } from "react";

import {
  Text,
  Box,
  Heading,
  Stack,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

const OptimizedHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h1"} color="red.500">
      {children}
    </Heading>
  );
};

const OptimizedSubHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading
      as={"h5"}
      fontSize={"3xl"}
      color={useColorModeValue("red.500", "red.400")}
    >
      {children}
    </Heading>
  );
};

const OptimizedText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      fontSize={"md"}
      color={useColorModeValue("gray.500", "white")}
    >
      {children}
    </Text>
  );
};

// const SimpleText = ({ children }: { children: ReactNode }) => {
//   return (
//     <Text
//       textAlign={"center"}
//       fontSize={"md"}
//       color={useColorModeValue("blue.500", "white")}
//     >
//       {children}
//     </Text>
//   );
// };

const Outcome = () => {
  return (
    <Box
      boxSizing="border-box"
      padding={[10, 80, 120]}
      mb={10}
      bg="white"
      w="100%"
      color="black"
      textAlign={"center"}
    >
      <OptimizedHeading>
        The Outcome for Participants of the Program
      </OptimizedHeading>
      <br />
      <br />
      <OptimizedText>
        The graduates of this program will own products (Full-Stack App
        Templates, AR and VR Experiences, and APIs) that are marketed globally
        by the Panaverse DAO and, if they like, will also be able to start off
        by offering services at a rate of $50 per hour ($96,000 per year). This
        would give Pakistani professionals and students a fantastic opportunity
        to better their financial situation while also giving the economy a
        much-needed boost by expanding software exports.
      </OptimizedText>
      <br />
      <br />
      <Box>
        <OptimizedSubHeading>Relevant Information Links</OptimizedSubHeading>
        <br />
        <Box textAlign="left" color="blue.500">
          <a
            href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms"
            target={"_blank"}
          >
            Top 5 &apos;Metaverse&apos; jobs that will rule the future of tech
            industry
          </a>
          <br />
          <a
            href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms"
            target={"_blank"}
          >
            Blockchain Developer Salary - Jun 2022
          </a>
          <br />
          <a
            href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms"
            target={"_blank"}
          >
            Web3 Salaries Soar to $750,000 for Rank-and-File Devs
          </a>
          <br />

          <a
            href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms"
            target={"_blank"}
          >
            The Metaverse, Blockchain Gaming, and NFTs: Navigating the
            Internet&apos;s Uncharted Waters
          </a>
          <br />
          <a
            href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms"
            target={"_blank"}
          >
            How To Become Metaverse Developer: Scope, Skills, and Salary
          </a>
          <br />
        </Box>
      </Box>
    </Box>
  );
};

export default Outcome;
//
