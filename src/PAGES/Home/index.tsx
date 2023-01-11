import React from 'react'
import Header from '../../SCREENS/Header'
import Slide from '../../SCREENS/Slide'
import Header2 from '../../SCREENS/Header2'
import Footer from '../../SCREENS/Footer'
import silde from '../../ASSESTS/Images/image15.png'

function HomePage() {
  return (
    <div>
       

          <div className='grid grid-cols-5'>
              {
                  [0, 1, 2, 3, 4,5,6,7,8,9].map((data, index) => {
                      return <div style={{ backgroundImage: `url(${silde})`, height: "calc(100vh - 6rem)" }} className="bg-center bg-contain bg-no-repeat w-full ">
                        
                      </div>
                      
                  })
              }
          </div>


    </div>
  )
}

export default HomePage