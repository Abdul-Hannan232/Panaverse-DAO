"use client";

import { Heading } from "@chakra-ui/react";
import HeroSection from "@/compenents/heroSection";
import Features from "@/compenents/features";
import Testimonials from "@/compenents/testimonials";
import Outcome from "@/compenents/outcome";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Testimonials />
      <Outcome />
      <hr />
    </>
  );
}
