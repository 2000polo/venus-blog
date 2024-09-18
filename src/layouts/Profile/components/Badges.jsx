import React from 'react'

const Badges = () => {
  return (
    <div className=''>
        <h1 className='font-bold '>Content Categories</h1>
        <div className="flex flex-wrap gap-2 mt-2">
            {/* <div className="col-span-2 w-full">
                Category
                <div className="badge badge-secondary">+12</div>
            </div> */}
            <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-4 py-2 rounded-full dark:bg-gray-200 dark:text-black">
                Technology
            </span>
           
            <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-4 py-2 rounded-full dark:bg-gray-200 dark:text-black">
                Web Technology
            </span>
            <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-4 py-2 rounded-full dark:bg-gray-200 dark:text-black">
                UI/UX Design
            </span>
            <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-4 py-2 rounded-full dark:bg-gray-200 dark:text-black">
                Science
            </span>
            <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-4 py-2 rounded-full dark:bg-gray-200 dark:text-black">
                Travel
            </span>
            {/* <button className="btn col-span-2">
                Category
                <div className="badge badge-secondary">+12</div>
            </button>
            <button className="btn col-span-2">
                Category
                <div className="badge badge-secondary">+12</div>
            </button>
            <button className="btn col-span-2">
                Category
                <div className="badge badge-secondary">+12</div>
            </button> */}
        </div>
    </div>
    
  )
}

export default Badges