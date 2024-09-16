import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import Badges from './Badges'

const ProfileDesc = () => {
  return (
    <>
      <div>
          <h1 className='text-black text-4xl font-bold mb-2'>Arun Paul</h1>
          <p className='text-gray-600'>Talks about web3 | Front-end Web Development | UI/UX Design</p>

          {/* Address Section */}
          <div className="grid grid-cols-6 my-5">
            <div className="col-span-2 flex flex-row space-x-4">
              <FaLocationDot className='w-14' fontSize={18} />
              <p className='text-gray-600'>
                <span className='font-bold'>Location Adress</span><br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ad nesciunt nisi commodi quaerat unde asperiores exercitationem!
              </p>
            </div>
            <div className="col-span-2">
              <img className='h-[100px] w-full object-cover' src="https://static.giggster.com/map/locations/1c7718b6-6f28-41a1-b284-ba9d0e4e5ee3/1677010134.png" alt="" />
            </div>
          </div>

          {/* Categories of interest */}
          <Badges /> 

          <div className="my-5">
            <h1 className='font-bold mt-2'>About</h1>
            <p className='text-gray-600 w-[49pc]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magnam omnis explicabo non ipsa, fuga sequi tempora temporibus debitis labore dolor, odit a iure alias fugit. Magni voluptate quaerat recusandae accusamus itaque dolore, ullam sed.
            </p>
          </div>
      </div>
    </>
    
  )
}

export default ProfileDesc