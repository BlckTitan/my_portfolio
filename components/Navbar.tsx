'use client'

import React, { useEffect, useState }  from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

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

      <div>

        <div className='text-3xl lg:text-3xl font-bold lg:font-extrabold text-white'>UGORJI EZE VICTOR</div>
        <h1 className='my-4 font-bold text-xl lg:text-2xl text-white'>Frontend Engineer</h1>
        <p className='w-full lg:w-[350px] text-base font-medium'> I build accessible, pixel-perfect digital experiences for the web.</p>

        {/* navigation link */}
        <nav className='flex flex-col mt-16'>
          
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

      </div>
      

      {/* social links */}
      <div className='social_links w-full flex justify-start'>
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
