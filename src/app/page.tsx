import Image from "next/image";
import AboutPage from "./about/page";
import Rating from "@/components/Rating";
import SponsorPage from "./sponsor/page";
import TeamPage from "./team/page";

export default function Home() {
  return (
    <>
      <AboutPage />
      <Rating />
      <TeamPage />
      <SponsorPage />
    </>
  );
}
