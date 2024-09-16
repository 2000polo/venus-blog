import React from 'react'
import ProfileDesc from './components/ProfileDesc'
import ProfileCard from './components/ProfileCard'
import Publications from './components/Publication'

const Profile = () => {
  return (
    <div className='grid grid-cols-9 gap-6 px-24 my-4'>
      
      <div className="col-span-2">
          <ProfileCard />
      </div>
      <div className="col-span-7">
          <ProfileDesc />
      </div>
      
      <div className="grid grid-cols-9 gap-6 col-span-9">
        <div className="col-span-9 font-bold">
          <h1 className='divider divider-start text-2xl font-semibold mb-1'>Recent Publication</h1>
        </div>
        <Publications />
      </div>
      
    </div>
  )
}

export default Profile