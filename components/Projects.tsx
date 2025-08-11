import Image from 'next/image'
import React from 'react'
import Octa from '@/public/octaCryptoApp.webp';
import WLBT from '@/public/WLBT.webp';

export default function Projects() {

  const stack = [
    {id: 1, stack: 'NextJs'},
    {id: 2, stack: 'MongoDb'},
    {id: 3, stack: 'Convex'},
    {id: 4, stack: 'Tailwind'},
    {id: 5, stack: 'Material UI'},
    {id: 6, stack: 'Git'},
    {id: 7, stack: 'Restful APis'},
  ]

  const data = [
    {
      id: 1,
      img: WLBT,
      stack: 'Built with: HTML, CSS, JS, React, Styled-Components, SmtpJS',
      title: 'WLBT Tour Reservation APP',
      description: 'WLBT tour Reservation app is designed to collect basic reservation information to different tourist destinations from vacationers and vacation plans can be prebooked ahead of high-season. This app lets users choose their destination, hotel facility, airport pickup and dropoff, passenger gender, duration of stay, passenger size. This project demonstrates my understanding of react and my ability to see out a project from ideation to completion.'
    },
    {
      id: 2,
      img: Octa,
      stack: 'Built with: HTML, CSS, MaterialUI, Material-icons, JS, React, Redux, RTKQuery, chartJS, SASS, Restful Api/rapidApi',
      title: 'Octa cryptoApp',
      description: 'Octa cryptoApp was built to give information on the market performance of the different cryptocurrencies as well related news articles. This app utilizes chartJS to give a visual representation of statistical data to help influence purchase decisions. This project demonstrate my ability to use react, redux and RTK Query consume Api data. It also demonstrates my ability to use material UI and other skills listed above.'
    }
  ]

  return (
    <div className='mt-16'>
      
      {/* stack section */}
      <div className='w-full flex flex-col items-center h-fit rounded-md bg-[var(--tag-foreground)] px-4 lg:px-24 py-4'>
        <h3 className='text-[var(--background)] text-2xl font-semibold'>My Stack</h3>
        <div className='w-full flex justify-center items-center flex-wrap h-fit'>
          {
            stack.map((item) => (
              <span key={item.id} className='w-fit h-fit px-4 py-2 mt-2 bg-[var(--background)] text-white mr-2 rounded-sm'>{item.stack}</span>
            ))
          }
        </div>
      </div>

      {/* projects */}
      <div className='mt-16'>
        <h3 className='inline-block lg:hidden mb-2 text-left text-white text-lg font-semibold'>Projects</h3>
        {
          data.map((item) => (
            <div key={item.id} className='w-full h-fit mb-2 flex flex-col justify-between items-start rounded-md p-4 hover:bg-white/15 hover:backdrop-blur-md'>
              <Image
                alt='Project image'
                src={item.img}
                className='w-full h-80 mb-4'
                objectFit='cover'
                objectPosition='center'
              />
              <div className='w-full h-full flex flex-col items-start justify-start'>
                <h2 className='text-white font-semibold'>{item.title}</h2>
                <p className='mt-4'>{item.description}</p>
              </div>
              <h6 className='w-full text-[var(--tag-foreground)] text-sm mt-2'>{item.stack}</h6>
            </div>
          ))
        }
      
      </div>

    </div>
  )
}
