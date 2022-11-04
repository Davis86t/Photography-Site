import React from 'react'
import Image from 'next/image'

export const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Wedding Photos</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 row-span-2'>
          <Image
            src='https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt='/'
            className='responsive'
            width='677'
            height='451'
          />
        </div>
        <div className='w-full h=full'>
          <Image
            src='https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
            alt='/'
            width='215'
            height='217'
            className='responsive cover'
          />
        </div>
        <div className='w-full h=full'>
          <Image
            src='https://images.unsplash.com/photo-1498979237786-9c35706bd45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt='/'
            width='215'
            height='217'
            className='responsive cover'
          />
        </div>
        <div className='w-full h=full'>
          <Image
            src='https://images.unsplash.com/photo-1625038032515-308ab14d10b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt='/'
            width='215'
            height='217'
            className='responsive cover'
          />
        </div>
        <div className='w-full h=full'>
          <Image
            src='https://images.unsplash.com/photo-1565038930214-09566ed2149b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt='/'
            width='215'
            height='217'
            className='responsive cover'
          />
        </div>
      </div>
    </div>
  )
}
