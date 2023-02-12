"use client";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/compenents/navbar";
import Footer from "@/compenents/footer";
import { motion } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraProvider>
          {/* <div as={motion.div}> */}
          <Navbar />
          {children}
          <Footer />
          {/* </div> */}
        </ChakraProvider>
      </body>
    </html>
  );
}
