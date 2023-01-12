import React from 'react'
import image from '../../ASSESTS/Images/image14.png'
import Footer2 from '../../SCREENS/Footer2'

function Portofolio() {
  return (
    <div className=''>
        <div className='bg-black w-full h-20 flex items-center justify-center divide-x '>
            <button className='text-white w-40 h-20 text-lg focus:bg-white focus:text-pink-800  px-3'> Tous</button>
              <button className='text-white w-44 h-20 text-lg focus:bg-white focus:text-pink-800 px-2  '> Contrats Pub Photo</button>
              <button className='text-white w-44 h-20 text-lg focus:bg-white focus:text-pink-800 px-2'> Contrats Pub video</button>
              <button className='text-white w-40 h-20 text-lg focus:bg-white focus:text-pink-800 px-3 '> Hôtesse Events</button>
        </div>

          <div className='grid grid-cols-5'>
              {
                  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((data, index) => {
                      return <div style={{ backgroundImage: `url(${image})`, height: "calc(100vh - 6rem)" }} className="bg-center bg-contain bg-no-repeat w-full ">

                      </div>

                  })
              }
          </div>
          <div className='flex space-x-4 my-8 justify-center'> {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((data, index) => {
              return <div className='bg-pink-800 rounded-full w-6 text-white flex items-center justify-center'>01</div>
          })}</div>
          <Footer2/>

    </div>
  )
}

export default Portofolio