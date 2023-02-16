import Head from 'next/head'
import Header from "components/Header";
import { Inter } from '@next/font/google'
import Hero from "components/Hero";
import * as React from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div>
      <Head>
        <title>Josh HiTech's Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero">
      <Hero />
      </section>
      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
      </div>
    </>
  )
}
