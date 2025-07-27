'use client'

import React, { useEffect, useState }  from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Hero from './Hero'

interface NavbarProps{
  hashLink: string
}

export default function Navbar({hashLink}: NavbarProps) {

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const currentHash = window.location.hash
    setIsActive(currentHash === hashLink)
  }, [hashLink])
  return (
    <section className='flex flex-col justify-between'>
      
      <Hero/>
      
      {/* navigation link */}
      <nav className='hidden lg:flex flex-col'>
        
        <a href="/#about" className={(isActive && hashLink === '#about') ? 'active' : '/'}>
          <span></span>
          ABOUT
        </a>

        <a href="#experience" className={(isActive && hashLink === '#experience') ? 'active' : ''}>
          <span></span>
          EXPERIENCE
        </a>

        <a href="#projects" className={(isActive && hashLink === '#projects') ? 'active' : ''}>
          <span></span>
          PROJECTS
        </a>

        <a href="#contact" className={(isActive && hashLink === '#contact') ? 'active' : ''}>
          <span></span>
          CONTACT
        </a>

      </nav>
      

      {/* social links */}
      <div className='social_links w-full flex justify-start mt-8 lg:mt-0'>
        <a href="/#">
          <i>
            <FaGithub />
          </i>
        </a>
        <a href="" className='mx-6'>
          <i>
            <FaLinkedin />
          </i>
          </a>
        <a href="">
          <i>
            <FaXTwitter />
          </i>
        </a>
      </div>

    </section>
  )
}
