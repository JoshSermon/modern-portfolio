import Head from 'next/head'
import Header from "components/Header";
import { Inter } from '@next/font/google'
import Hero from "components/Hero";
import About from "components/About";
import Skills from "components/Skills";
import Projects from "components/Projects";
import * as React from "react";
import { NextPage } from 'next';
import Experience from 'components/Experience';

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  return ( 
    <div className="bg-zinc-800 text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
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
      </div>
  )
}

export default Home;