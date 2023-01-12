import { data } from 'cypress/types/jquery'
import React from 'react'
import silde from '../../ASSESTS/Images/image3.png'

function Slide() {
  return (
      <div className='grid grid-cols-5 '>
        {
            [0,1,2,3,4].map((data, index)=>{
                return <div style={{backgroundImage : `url(${silde})`, height: "calc(100vh - 6rem)"}}  className="bg-center bg-cover bg-no-repeat w-full ">
                    
                </div>
            })
        }
    </div>
  )
}

export default Slide