import React from 'react'
import { BiMovie } from 'react-icons/bi'
import { GrTechnology } from 'react-icons/gr'
import { MdOutlineBusiness, MdOutlineMedicalServices, MdTravelExplore } from 'react-icons/md'
import { RiStockLine } from 'react-icons/ri'

const CategoryMenu = () => {
  return (
    <ul className="menu bg-base-200 lg:menu-horizontal rounded-box px-24 flex justify-center w-full">
        <li>
            <a>
            <GrTechnology />
            Technology
            <span className="badge badge-sm bg-red-500 text-white">99+</span>
            </a>
        </li>
        <li>
            <a>
            <MdOutlineMedicalServices />
            Health
            <span className="badge badge-sm bg-red-500 text-white">99+</span>
            </a>
        </li>
        <li>
            <a>
            <MdOutlineBusiness />
            Business
            <span className="badge badge-sm bg-red-500 text-white">99+</span>
            </a>
        </li>
        <li>
            <a>
            <RiStockLine />
            Stock Market
            <span className="badge badge-sm bg-red-500 text-white">99+</span>
            </a>
        </li>
        <li>
            <a>
            <BiMovie />
            Entertainment
            <span className="badge badge-sm bg-red-500 text-white">99+</span>
            </a>
        </li>
        <li>
            <a>
            <MdTravelExplore />
            Travel
            <span className="badge badge-sm bg-red-500 text-white">99+</span>
            </a>
        </li>
        <li>
            <a>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Updates
            <span className="badge badge-sm badge-warning">NEW</span>
            </a>
        </li>
        <li>
            <a>
            Stats
            <span className="badge badge-xs badge-info"></span>
            </a>
        </li>
    </ul>
    )
}

export default CategoryMenu