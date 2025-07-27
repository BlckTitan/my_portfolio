import React from 'react'
import Avatar from '../public/freePik_Avatar.png'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className=''>

      <div className='w-full h-fit hidden lg:flex lg:justify-center lg:items-center mb-2'>
        <div 
          className='bg-[var(--foreground)] absolute -z-10 w-[180px] lg:w-[210px] h-[180px] lg:h-[210px] rounded-full'
        />
        <Image
          src={Avatar}
          alt='type: PNG description: an avatar depicting the frontend engineer, Ugorji Eze Victor'
          className='w-[250px] h-[200px] lg:h-[300px] object-cover object-left'
        />
      </div>

      <div className='text-3xl lg:text-3xl font-bold lg:font-extrabold text-white'>UGORJI EZE VICTOR</div>
      <h1 className='my-4 font-bold text-xl lg:text-2xl text-white'>Frontend Engineer</h1>
      <p className='w-full lg:w-[350px] text-base font-medium'> I build accessible, pixel-perfect digital experiences for the web.</p>

    </section>
  )
}
