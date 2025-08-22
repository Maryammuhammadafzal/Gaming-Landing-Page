import Image from "next/image";
import AboutPage from "./about/page";
import Rating from "@/components/Rating";

export default function Home() {
  return (
    <>
      <AboutPage />
      <Rating />
    </>
  );
}
