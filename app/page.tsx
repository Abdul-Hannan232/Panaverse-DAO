"use client";

import { Heading } from "@chakra-ui/react";
import HeroSection from "@/compenents/heroSection";
import Features from "@/compenents/features";
import Testimonials from "@/compenents/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Testimonials />
    </>
  );
}
