import Image from 'next/image'
import Hero from "../components/Marketing/Hero"
import Features from "../components/Marketing/Features"
import Pricing from "../components/marketing/Pricing"
import BlogHighlights from "../components/Marketing/BlogHighlights"
import FAQ from "../components/marketing/FAQ"
import CTA from "../components/Marketing/CTA"
import Footer from "../components/Marketing/Footer"
import React from 'react'

export default function Home() {
  return (
    <main> 
      <Hero />
      <Features />
      <Pricing />
      <BlogHighlights />
      <FAQ />
      <CTA />
      <Footer />
    </main>
   
  )
}
