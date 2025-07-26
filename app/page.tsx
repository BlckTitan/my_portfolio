'use client'

import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import MouseGradientBackground from '@/components/MouseGradientBackground'
import { useEffect, useState } from 'react';

export default function Home() {
  const [hashLink, setHashLink] = useState<string>(typeof window !== 'undefined' ? window.location.hash : '')
 
  useEffect(() => {
    const handleHashChange = () => {
      setHashLink(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange)

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <section className="w-full h-screen flex justify-center px-4 lg:px-0">
      
      <MouseGradientBackground/>

      <div className='w-full lg:w-[1200px] flex flex-col lg:flex-row lg:justify-between'>
          
        <div className='w-full lg:w-[400px] h-full py-16 lg:py-24 flex justify-center'>
          <Navbar hashLink={hashLink}/>
        </div>

        <div className='w-full lg:w-[700px] h-full pt-16 lg:pt-24'>

          <div id='hero'>
            <About/>
          </div>

          <div id='experience'>
            <Experience/>
          </div>

          <div id="projects">
            <Projects/>
          </div>

          <div id="contact">
            <Contact/>
          </div>

          <div id='footer'>
            <Footer/>
          </div>

        </div>

      </div>
        
    </section>
  );
}
