import React from 'react'
import loupe from "../../ASSESTS/Images/loupe.png"

function Header2() {
  return (
    <div className='bg-pink-800 h-20 w-full flex items-center justify-center space-x-3  '>
        <button className='bg-white h-14 w-30 px-5 font-medium hover:font-bold'> Nouveau</button>
        <button className='bg-white h-14 w-30  px-5'> Hôtesse</button>
        <div className='border border-white boder-4 w-72 flex space-x-3'>
            <button className='bg-white h-14 w-30 px flex items-center justify-center'> Modèle Photo</button>
            <div className='flex items-center text-white'>
                <input type="radio" value="1"  /> Homme
            </div>
              <div className='flex items-center text-white'>
                  <input type="radio" value="2" /> Femme
            </div>
        </div>
        <div className='border border-white boder-4 w-60 flex space-x-3'>
              <input type="text" className=' h-14 w-48 flex items-center justify-center bg-transparent placeholder-white focus:outline-none pl-4' placeholder='Tag,Prénom,Catégorie'/> 
              <div className='flex items-center text-white'>
                 <button className='bg-white h-14 px-2 '>
                    <img src={loupe} className=''/>
                 </button>
              </div>
              
        </div>
          <div className='flex space-x-2'> <label className='text-white'> Age</label><input type="range" className="" /></div>
        
          <button className='border h-14 px-5 text-white hover:bg-white cursor-pointer hover:text-pink-800'> Recherche avancée</button>
    </div>
  )
}

export default Header2