import React from 'react'
import image from '../../ASSESTS/Images/image14.png'
import Pagination from '../../COMPONENTS/Pagination'
import Footer2 from '../../SCREENS/Footer2'

function Portofolio() {
  return (
    <div className=''>
        <div className='bg-black w-full h-20 flex items-center justify-center divide-x '>
        <button className='text-white w-60 h-20 text-lg focus:bg-white focus:text-pink-800 hover:bg-white hover:text-pink-800  px-3'> Tous</button>
        <button className='text-white w-60 h-20 text-lg focus:bg-white focus:text-pink-800 hover:bg-white hover:text-pink-800 px-2  '> Contrats Pub Photo</button>
        <button className='text-white w-60 h-20 text-lg focus:bg-white focus:text-pink-800 hover:bg-white hover:text-pink-800 px-2'> Contrats Pub video</button>
        <button className='text-white w-60 h-20 text-lg focus:bg-white focus:text-pink-800 hover:bg-white hover:text-pink-800 px-3 '> Hôtesse Events</button>
        </div>

          <div className='grid grid-cols-5'>
              {
                  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((data, index) => {
                      return <div style={{ backgroundImage: `url(${image})`, height: "calc(100vh - 6rem)" }} className="bg-center bg-cover bg-no-repeat w-full ">
                        <div className='hover:bg-black opacity-75 h-full cursor-pointer flex items-center justify-center'>
                          <i className='fa fa-play-circle' style={{color:"white", fontSize:"60px"}}></i>
                        </div>

                      </div>

                  })
              }
          </div>
            <div className="justify-center flex items-center w-full">
            <Pagination/>
            </div>
          <Footer2/>

    </div>
  )
}

export default Portofolio