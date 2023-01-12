

import React from 'react'
import Footer from '../../SCREENS/Footer'
import silde from '../../ASSESTS/Images/image15.png'

function HomePage() {
  return (
    <div>
        <div className='grid grid-cols-5 pt-6'>
              {
                  [0, 1, 2, 3, 4,5,6,7,8,9].map((data, index) => {
                      return <div >
                        <img src={silde}/>
                      </div>
                      
                  })
              }
        </div>
              <Footer/>

    </div>
  )
}

export default HomePage