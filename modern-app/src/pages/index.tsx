import Head from 'next/head'
import Header from "components/Header";
import { Inter } from '@next/font/google'
import Hero from "components/Hero";
import * as React from "react";
import { NextPage } from 'next';

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  return ( 
    <div className="bg-zinc-800 text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Josh HiTech's Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
      <Hero />
      </section>
      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
      </div>
  )
}

export default Home;