import React from 'react'
import { NavLink } from 'react-router-dom'

const GallerySection = () => {
  return (
    <div className='flex justify-center my-14'>
    <div className='w-10/12 flex flex-col items-center mx-auto' >
    <p className="text-primary font-semibold">OUR GALLERY</p>
        <p className="text-textbrown font-[Rowdies] font-medium mb-2 text-xl mx-5 md:text-3xl xl:text-4xl">
          Watch Our Gallery
        </p>
        <div>Videos</div>
        <NavLink>
        <button className="border-2 border-gray-200 text-primary hover:scale-105 transform duration-300 font-semibold px-6 mt-5 py-2 rounded-full ">
            Explore All
          </button>
        </NavLink>
    </div>
      
    </div>
  )
}

export default GallerySection
