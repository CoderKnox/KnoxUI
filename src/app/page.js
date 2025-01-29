"use client"

import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "knoxui-react"
import HeroBanner from "@/components/HeroBanner"
import { AnimatedCard } from "@/components/AnimatedCard"
import GradientDots from "@/components/GradientDots"
import Link from "next/link"
import components from "@/components/KnoxUiComponents"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="">
        <HeroBanner>
          <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto tracking-wide">
            Welcome to KnoxUI, a modern and corporate-focused React component library designed for building sleek,
            responsive, and efficient web applications. Explore our comprehensive components and documentation to
            elevate your design and create stunning user interfaces with ease.
          </p>
          <div className="flex mx-auto w-fit space-x-4 mt-8">
            <Link href={"/doc/installation"}>
              <Button
                variant="ghost"
                size="lg"
                className="!border !border-white/20 !bg-white/10 !rounded-full transition-shadow w-44"
              >
                Get Started
              </Button>
            </Link>
            <Link href="https://github.com/CoderKnox/knoxui-react" target="_blank">
              <Button
                variant="ghost"
                size="lg"
                className="!border !border-white/20 !bg-white/10 !rounded-full transition-shadow w-44"
              >
                View on GitHub
              </Button>
            </Link>
          </div>
          <div className="mt-8">
            <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">
              Explore Components →
            </Link>
          </div>
        </HeroBanner>

        <motion.div
          className="px-12 -mt-4 pb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-primary-gradient px-1 pb-4 rounded-b-3xl">
            <div className="relative bg-gradient-to-b from-base-200 to-base-300 py-16 rounded-b-3xl shadow overflow-hidden">
              <GradientDots />
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Component Quick Preview</h2>
                <div className="grid grid-cols-2 gap-8">
                  {components && components.length > 0 ? (
                    components.map((component, i) => (
                      <AnimatedCard key={i} className={component.className || ""}>
                        <div className="flex items-center pb-4 justify-between font-semibold">
                          <h3 className="text-xl">{component.title || "Untitled"}</h3>
                          <Link
                            href={component.link || "#"}
                            className="hover:tracking-wider duration-200 hover:text-pink-400"
                          >
                            Explore →
                          </Link>
                        </div>
                        {component.content}
                      </AnimatedCard>
                    ))
                  ) : (
                    <p>No components available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
