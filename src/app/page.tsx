import Image from "next/image";
import AboutPage from "./about/page";
import Rating from "@/components/Rating";
import SponsorPage from "./sponsor/page";
import TeamPage from "./team/page";
import EarnPage from "./earn/page";
import UpcomingPage from "./upcoming/page";
import FeaturesPage from "./features/page";
import AwardsPage from "./awards/page";

export default function Home() {
  return (
    <>
      <AboutPage />
      <Rating />
      <FeaturesPage/>
      <AwardsPage/>
      <UpcomingPage/>
      <EarnPage/>
      <TeamPage />
      <SponsorPage />
    </>
  );
}
