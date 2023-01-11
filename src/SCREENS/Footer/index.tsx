import React from 'react'

function Footer() {
  return (
    <div className='bg-black h-40 flex flex-col items-center justify-center py-5 w-screen'>
        <div className='flex space-x-4 my-8'> {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((data, index)=>{
            return <div className='bg-pink-800 rounded-full w-6 text-white'>01</div>
        })}</div>
        <div className='text-white'>Designed by Boost Business | Teamdev</div>

    </div>
  )
}

export default Footer