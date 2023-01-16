import React from 'react'
import silde from '../../ASSESTS/Images/image3.png'

function Slide() {
  return <div className="w-full">
    <div className='flex flex-wrap'>
        {
            [0,1,2,3,4].map((data: any, index: number)=>{
                return <div key={index} style={{backgroundImage : `url(${silde})`, 
                height: "calc(100vh - 6rem)"}}  
                className="slide-profile-item bg-center bg-cover bg-no-repeat w-1/5"/>
            })
        }
    </div>
  </div>
}

export default Slide