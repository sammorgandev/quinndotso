import Image from 'next/image'
import Hero from "../components/marketing/Hero"
import Features from "../components/marketing/Features"
import Pricing from "../components/marketing/Pricing"
import BlogHighlights from "../components/marketing/BlogHighlights"
import FAQ from "../components/marketing/FAQ"
import CTA from "../components/marketing/CTA"
import Footer from "../components/marketing/Footer"
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
