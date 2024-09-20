import React from 'react'
import category1 from "../assets/category1.png"
import category2 from "../assets/category2.png"
import category3 from "../assets/category3.png"
import category4 from "../assets/category4.png"
import Oval from "../assets/Oval.png"
import Path from "../assets/Path.png"

const CardSection = () => {
    const caterogoryData = [
        {
            id:1,
            title:"Education",
            description:"Charities empower people to make a difference, even if it is just in a small way",
            image:category1,
        },
        {
            id:2,
            title:"Health",
            description:"Charities empower people to make a difference, even if it is just in a small way",
            image:category2,
        },
        {
            id:3,
            title:"Disaster Relief",
            description:"Charities empower people to make a difference, even if it is just in a small way",
            image:category3,
        },
        {
            id:4,
            title:"Hunger Eradication",
            description:"Charities empower people to make a difference, even if it is just in a small way",
            image:category4,
        },
    ]
  return (
    <div className='relative grid md:grid-cols-2 gap-10 m-5 mx-5 md:mx-20'>
      {
        caterogoryData.map(data=>(
            <div key={data.id} className='max-w-[25rem]  bg-bluefive px-8 md:px-12 py-7 md:py-10 rounded-lg flex flex-col gap-3 justify-center items-start'>
            <div className='flex items-center gap-2'><img src={data.image}></img>
            <p className='text-primary font-semibold'>{data.title}</p>
            </div>
            
            <div className='w-full bg-white rounded-full h-[1.5px]'>
                <div className='w-[20%] bg-black rounded-full h-full' ></div>
            </div>
            <p className=' text-textbrown'>{data.description}</p>
            </div>
        ))
      }
      <img className='absolute hidden sm:block top-5 -left-16 -z-10 scale-90' src={Oval} loading='lazy' />
      <img className='absolute hidden sm:block top-7 -left-16 -z-20' src={Path} loading='lazy' />
    </div>
  )
}

export default CardSection
