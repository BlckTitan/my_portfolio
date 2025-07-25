import React from 'react'

const data = [
  {
    id: 1,
    date: 'PRESENT',
    title: 'inSpace',
    description: 'Easybank landing page gives quick information and guides user action with a CTA. This project fully responsive.'
  },
  {
    id: 2,
    date: '2023',
    link: '#',
    title: 'WorldLink',
    description: 'Easybank landing page gives quick information and guides user action with a CTA. This project fully responsive.'
  }
]

export default function Experience() {
  return (
    <div id='experience'>
      {
        data.map((item) => (
          <div key={item.id} className='w-full h-fit mb-2 flex flex-col lg:flex-row justify-between items-start rounded-md p-4 hover:bg-white/15 hover:backdrop-blur-md'>
            <h3 className='w-28 mr-3 mb-2 lg:mb-0'>{item.date}</h3>
            <div className='w-full h-full flex flex-col items-start justify-start'>
              <h2 className='text-white font-semibold'>{item.title}</h2>
              <p className='mt-4'>{item.description}</p>
            </div>
          </div>
        ))
      }
    
    </div>
  )
}
