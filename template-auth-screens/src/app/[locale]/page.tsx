import type { Metadata } from "next";
import { Portfolio } from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Auth Screens Template",
  description: "A premium modern authentication screens template built with Next.js and Tailwind CSS.",
};

export default function Home() {
  return <Portfolio />;
}
