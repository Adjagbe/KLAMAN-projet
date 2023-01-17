import React from 'react'
import ornela from '../../ASSESTS/Images/Ornela.png'
import Footer2 from '../../SCREENS/Footer2'
import Header2 from '../../SCREENS/Header2'
import Slide from '../../SCREENS/Slide'

function Klaman() {
  return (
    <>
      <Slide />
      <Header2 />
    <div className='bg-gray-300 flex items-center  justify-center'>
        <div className='flex flex-col'>
            <div className='text-5xl text-gray-600 font-semibold pr-64'>Klaman</div>
            <div style={{ width: "420px" }} className='text-justify text-sm py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        
            <div style={{ width: "420px" }} className='text-justify text-sm pb-2 ' >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
      </div>
      <div> <img src={ornela} style={{width:"400px"}}/></div>
      
    </div>
    <Footer2/>
    </>
  )
}

export default Klaman