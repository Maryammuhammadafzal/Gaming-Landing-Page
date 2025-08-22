import Image from "next/image";
import AboutPage from "./about/page";
import Rating from "@/components/Rating";
import SponsorPage from "./sponsor/page";

export default function Home() {
  return (
    <>
      <AboutPage />
      <Rating />
      <SponsorPage />
    </>
  );
}
