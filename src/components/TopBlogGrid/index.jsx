import React from 'react'
import { Link } from 'react-router-dom'

const TopBlogsGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-1 md:grid-cols-7 md:gap-6 xl:gap-2 px-1 md:px-24 z-1 ">
        <div className="col-span-2 md:col-span-5 group relative flex h-[250px] md:h-[500px] items-end overflow-hidden bg-gray-100 shadow-lg">
            <Link to='/blog-view'>
                <img src="https://i.pinimg.com/originals/a2/94/1f/a2941f55f947539c07903d308a1b4fe2.webp" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-60">
                </div>
                <div className="relative inset-x-0 px-4 bg-gradient-to-t from-black via-black-100 to-transparent ">
                    <h1 className=" mb-1 inline-block text-xl md:text-2xl font-extrabold text-white ">Balanced Diet</h1>
                    <p className="text-xs md:text-wrap  pb-3 text-white md:text-base ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate impedit accusamus deleniti voluptatum laudantium aspernatur vitae quis quo doloribus consectetur in molestias odit, nisi magni eveniet veniam placeat ullam velit beatae. Iure veniam odio nisi natus laborum adipisci deleniti iusto excepturi architecto laudantium. Eos doloribus fuga neque reiciendis omnis fugiat?</p>
                </div>
            </Link>
        </div>
        
        <div className="grid grid-cols-4 gap-1 xl:gap-2 col-span-2 z-1">
            <div className="col-span-2 md:col-span-4 h-[170px] md:h-full group relative flex items-end overflow-hidden bg-gray-100 shadow-lg">
                <Link to='/blog-view'>
                    <img src="https://i.pinimg.com/564x/16/7e/d7/167ed71207b6733e1279b28b4df44262.jpg" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50">
                    </div>

                    <div className="relative inset-0 bg-gradient-to-t from-black via-black-100 to-transparent ">
                        <h1 className=" ml-4 mb-1 inline-block text-xl md:ml-5 md:text-2xl font-extrabold text-white ">Balanced Diet</h1>
                        <p className="text-xs md:text-base  ml-4 pb-3 text-white md:mx-5 relative">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, assumenda excepturi itaque ipsa ducimus nisi!assumenda excepturi itaque ipsa ducimus nisi!</p>
                    </div>
                </Link>
            </div>
            <div className="col-span-2 md:col-span-4 w-full md:w-full group relative flex items-end overflow-hidden bg-gray-100 shadow-lg">
                <Link to='/blog-view'>
                    <img src="https://i.pinimg.com/originals/c3/3a/59/c33a596d145b74da7da553d7b6cc0433.jpg" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50">
                    </div>

                    <div className="relative inset-0 bg-gradient-to-t from-black via-black-100 to-transparent ">
                        <h1 className=" ml-4 mb-1 inline-block text-xl md:ml-5 md:text-2xl font-extrabold text-white ">Balanced Diet</h1>
                        <p className="text-xs md:text-base  ml-4 pb-3 text-white md:mx-5 relative">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, assumenda excepturi itaque ipsa ducimus nisi!assumenda excepturi itaque ipsa ducimus nisi!</p>
                    </div>
                </Link>
            </div>
        </div>
        <div className="col-span-2 group relative flex h-[200px] md:h-full items-end overflow-hidden bg-gray-100 shadow-lg">
            <Link to='/blog-view'>
                <img src="https://i.pinimg.com/originals/cc/61/69/cc6169dcca15b9d94137a4a5ac3e2665.jpg" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50">
                </div>

                <div className="relative inset-0 bg-gradient-to-t from-black via-black-100 to-transparent ">
                    <h1 className=" ml-4 mb-1 inline-block text-xl md:ml-5 md:text-2xl font-extrabold text-white ">Balanced Diet</h1>
                    <p className=" text-xs md:text-base ml-4 pb-3 text-white md:mx-5 relative">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, assumenda excepturi itaque ipsa ducimus nisi!assumenda excepturi itaque ipsa ducimus nisi!</p>
                </div>
            </Link>
        </div> 
        <div className="col-span-2 group relative flex h-[200px] md:h-full items-end overflow-hidden bg-gray-100 shadow-lg">
            <Link to='/blog-view'>
                <img src="https://i.pinimg.com/originals/95/b4/ae/95b4ae655f2a6b7f1777a43fca55e9a2.jpg" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50">
                </div>

                <div className="relative inset-0 bg-gradient-to-t from-black via-black-100 to-transparent ">
                    <h1 className=" ml-4 mb-1 inline-block text-xl md:ml-5 md:text-2xl font-extrabold text-white ">Balanced Diet</h1>
                    <p className=" text-xs md:text-base ml-4 pb-3 text-white md:mx-5 relative">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, assumenda excepturi itaque ipsa ducimus nisi!assumenda excepturi itaque ipsa ducimus nisi!</p>
                </div>
            </Link>
        </div> 
        <div className="col-span-3 group relative flex h-[300px] items-end overflow-hidden bg-gray-100 shadow-lg">
            <Link to='/blog-view'>
                <img src="https://i1.wp.com/www.musclecarsandtrucks.com/wp-content/uploads/2020/03/Tesla-Cybertruck-.jpg?fit=1240,620&ssl=1" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50">
                </div>

                <div className="relative inset-0 bg-gradient-to-t from-black via-black-100 to-transparent ">
                    <h1 className=" ml-4 mb-1 inline-block text-xl md:ml-5 md:text-2xl font-extrabold text-white ">Balanced Diet</h1>
                    <p className=" text-xs md:text-base ml-4 pb-3 text-white md:mx-5 relative">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, assumenda excepturi itaque ipsa ducimus nisi!assumenda excepturi itaque ipsa ducimus nisi!</p>
                </div>
            </Link>
        </div> 
        
        
    </div>
  )
}

export default TopBlogsGrid