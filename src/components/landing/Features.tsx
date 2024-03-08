'use client'

// named imports
import { useState } from 'react'
import { features } from '@/constants/features'

// default imports
import Image from 'next/image'

function Features() {
  const [selectedFeature, setSelectedFeature] = useState(features[0])
  return (
    <div className='py-20 bg-accent/20'>
      <div className='flex flex-col space-y-5 justify-center items-center px-10 sm:px-0'>
        <h2 className='text-4xl font-semibold text-center'>
          Explore, Download, Author, Create.
        </h2>
        <p className='text-lg font-light'>
          Athena offers a wide range of features to help you discover and enjoy your next great read.
        </p>
      </div>

      <div className='md:flex justify-center ml-20 pt-44 hidden'>
        <ul className='flex flex-col space-y-3'>
          {features.map((feature, index) => (
            <li
              onClick={() => setSelectedFeature(feature)}
              key={index}
              className={`
              ${selectedFeature.name === feature.name ? 'glass-style' : null}   
              p-3 flex border-l border-slate-400 border-y rounded-l-xl flex-col overflow-hidden space-y-1 hover:glass-style w-[390px] cursor-pointer h-28
          `}
            >
              <h3 className='text-lg font-semibold'>{feature.name}</h3>
              <p className='font-light text-sm'>{feature.description}</p>
            </li>
          ))}
        </ul>
        <div className='relative z-30 h-[600px] w-[1100px] -mt-24'>
          <Image
            fill
            className='rounded-l-2xl object-cover overflow-hidden'
            alt={selectedFeature.name}
            src={selectedFeature.image}
          />
        </div>
      </div>
    </div>
  )
}

export default Features