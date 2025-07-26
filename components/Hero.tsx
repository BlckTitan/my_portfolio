import React from 'react'
import Avatar from '../public/freePik_Avatar.png'
import Image from 'next/image'

export default function Hero() {
  return (
    <section>

      <div className='w-full h-fit flex justify-center items-center mb-4'>
        <div className='avatarContainer w-full lg:w-[250px] h-[250px] flex justify-end items-center rounded-full'>
          <Image
            src={Avatar}
            alt='type: PNG description: an avatar depicting the frontend engineer, Ugorji Eze Victor'
            className='w-full h-[300px] object-cover object-left'
          />
        </div>
      </div>

      <div className='text-3xl lg:text-3xl font-bold lg:font-extrabold text-white'>UGORJI EZE VICTOR</div>
      <h1 className='my-4 font-bold text-xl lg:text-2xl text-white'>Frontend Engineer</h1>
      <p className='w-full lg:w-[350px] text-base font-medium'> I build accessible, pixel-perfect digital experiences for the web.</p>

    </section>
  )
}
