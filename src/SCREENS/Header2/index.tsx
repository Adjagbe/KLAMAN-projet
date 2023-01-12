import React from 'react'
import loupe from "../../ASSESTS/Images/loupe.png"

function Header2() {
  return (
    <div className='bg-pink-800 h-20 w-screen flex items-center space-x-5 px-10 '>
        <button className='bg-white h-14 w-32 px-5 '> Nouveau</button>
        <button className='bg-white h-14 w-32 px-5'> Hôtesse</button>
        <div className='border border-white boder-4 w-80 flex space-x-3'>
            <button className='bg-white h-14 w-32 flex items-center justify-center'> Modèle Photo</button>
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
        <input type="range" className=""/>
          <button className='border h-14 px-5 text-white'> Recherche avancée</button>
    </div>
  )
}

export default Header2