import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { MdLocalPhone } from 'react-icons/md'
import { TfiEmail } from 'react-icons/tfi'

export default function Contact() {
  return (
    <div className='py-4'>
      <h3 className='hidden lg:inline-block  mb-2 text-left text-white text-lg font-semibold'>Contact</h3>

      <div className='w-full h-fit'>

        <div className='contact-text'>
          <i><MdLocalPhone /></i> 
          <span>(+234) 8134484139</span>
        </div>

        <div className='contact-text my-4'>
          <i><FaWhatsapp /></i> 
          <span>(+234) 8134484139</span>
        </div>

        <div className='contact-text'>
          <i><TfiEmail /></i> 
          <span>ugorjivictoreze@gmail.com</span>
        </div>
        
      </div>

    </div>
  )
}
