import React from 'react'
import hand from "../assets/hand.png"
import handbg from "../assets/handbg.png"
import men from "../assets/men.png"
import { NavLink } from 'react-router-dom'

const AboutAndNumber = () => {
    const numberData = [
        {
            id:1,
            number:42,
            title:"People",
            description:"Prevention of Cruelty",
        },
        {
            id:2,
            number:73,
            title:"Society",
            description:"Direct Relief",
        },
        {
            id:3,
            number:19,
            title:"Project",
            description:"Research Hospital"
        }
    ]
  return (
    <div className='bg-bluefive mt-5 flex justify-center'>
    <div className='flex w-10/12 mx-auto flex-col '>
       {/* hand section1 */}
       <div className=' flex gap-10 mx-auto flex-col md:flex-row items-center mt-20 mb-14 sm:mb-20 '>
       {/* left */}
        <div className='relative'>
    <img className=' hidden sm:block h-[28rem]' src={handbg}  ></img>
    <img className='sm:absolute size-72 top-[12%] left-14 ' src={hand}  ></img>
        </div>
        {/* right */}
        <div className='flex flex-col gap-2 sm:gap-4'> 
        <NavLink className="text-primary font-semibold">ABOUT US</NavLink>
        <p className='text-textbrown  sm:text-4xl text-3xl font-[Rowdies]'>Highest Form <br/> of love</p>
        <p className='text-textbrown max-w-96'>The best philosophy of charity is the one that is most effective in helping those in need.</p>
        <NavLink to="/about">
          <button className="border-2 border-gray-500 text-primary hover:scale-105 transform duration-300 font-semibold px-6 py-2 rounded-full ">
            About Us
          </button>
        </NavLink>
        </div>
       </div>
       {/* number-> section2 */}
       <div className=' flex gap-10 mx-auto flex-col items-center'>
        <p className='text-textbrown max-w-[50rem] text-center font-extrabold  sm:text-3xl text-2xl'>Whatever it is that you care about, there will be a charity working on it.</p>
        <div className='flex flex-wrap gap-10 ' >
            {
                numberData.map(data=>(
                    <div key={data.id} className='bg-white mx-auto w-64 sm:w-72 px-8 py-5 flex gap-3 items-center rounded-lg '>
                        <p className=' font-[Rowdies] text-3xl sm:text-4xl font-medium text-textbrown ' >{data.number}</p>
                        <div className='flex flex-col' >
                            <p className='text-lg font-semibold'>{data.title}</p>
                            <p className='text-gray-400 text-sm'>{data.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
       </div>
       <div className=' flex gap-10 mx-auto flex-col md:flex-row items-center my-20 '>
       {/* left */}
       <div className='flex flex-col gap-2 sm:gap-4'> 
        <NavLink className="text-primary uppercase font-semibold">Volunteer</NavLink>
        <p className='text-textbrown  sm:text-4xl text-3xl font-[Rowdies]'>Unselfish love of  <br/>
        one's fellow men</p>
        <p className='text-textbrown max-w-96'>Charity is the act of giving help to those in need of it. It is a humanitarian act. It involves giving money, goods or time and effort to those who need it.</p>
        <NavLink to="/about">
          <button className="border-2 border-gray-500 text-primary hover:scale-105 transform duration-300 font-semibold px-6 py-2 mt-2 rounded-full ">
          Be A Volunteer
          </button>
        </NavLink>
        </div>
       {/* right */}
        <div className='relative'>
    <img className=' hidden sm:block aspect-auto h-[28rem] rotate-90 ' src={handbg}  ></img>
    <img className='sm:absolute size-72 top-[14%] left-24 rounded-lg ' src={men}  ></img>
        </div>
        
       </div>
    </div>
      
    </div>
  )
}

export default AboutAndNumber
