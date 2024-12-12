import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Manage from "@/components/Manage";
import Nabvar from "@/components/Nabvar";
import Spons from "@/components/Spons";
import Work from "@/components/Work";
import React from 'react'

export default function Home() {
  return (
    <>
    <Nabvar/>
    <Hero/>
    <Manage/>
    <Work/>
    <Spons/>
    <Footer/>
    </>
  );
}
