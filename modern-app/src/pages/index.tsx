import Head from 'next/head'
import Header from "components/Header";
import { Inter } from '@next/font/google'
import Hero from "components/Hero";
import About from "components/About";
import Skills from "components/Skills";
import Projects from "components/Projects";
import Contact from "components/Contact";
import * as React from "react";
import { NextPage } from 'next';
import Experience from 'components/Experience';
import Link from 'next/link';
import YoutubeEmbed from 'components/YouTubeEmbed';

const Home: NextPage = () => {
  return ( 
    <div className="transition-all duration-200 bg-gradient-to-r from-slate-700 via-slate-400 to-slate-700 background-animate text-white h-screen snap-y snap-mandatory
     overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-white-400/20 scrollbar-thumb-[#94a3b8]/80">
      <Head>
        <title>Josh HiTech's Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
      <Hero />
      </section>


      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

    {/* About */}
    <section id="youtube" className="snap-center">
        <YoutubeEmbed />
      </section>


      {/* Experience */}
      <section id="experience" className="snap-center">
      < Experience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
      < Skills />
      </section>


      {/* Projects */}
      <section id="projects" className="snap-start">
      < Projects />
      </section>



      {/* Contact Me */}
      <section id="contact" className="snap-start">
      < Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img className="h-7 w-10 rounded-none filter grayscale hover:grayscale-0
            cursor-pointer md:hidden"
            src="images/hitech-white-logo.png"
            alt=""
            />
          </div>
        </footer>
      </Link>
      </div>
  )
}

export default Home;