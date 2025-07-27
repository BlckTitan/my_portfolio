import React from 'react'

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

  return (
    <div className='mt-16'>
      {/* stack section */}
      <div className='w-full flex justify-center items-center flex-wrap h-fit rounded-md bg-[var(--tag-foreground)] px-4 lg:px-24 py-4'>
        {
          stack.map((item) => (
            <span key={item.id} className='w-fit h-fit px-4 py-2 mt-2 bg-[var(--background)] text-white mr-2 rounded-sm'>{item.stack}</span>
          ))
        }
      </div>

      {/* projects */}
      <div className='mt-16'>

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

    </div>
  )
}
