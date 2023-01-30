import React from 'react'
import loupe from "../../ASSESTS/Images/loupe.png"
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
function Header2() {
  return (
    <div className='bg-pink-800 h-20 w-full flex items-center justify-center space-x-3 '>
        <button className='bg-white h-14 w-30 px-5 font-medium hover:font-bold hover:text-pink-800 '> Nouveau</button>
        <button className='bg-white h-14 w-30 px-5 font-medium hover:font-bold hover:text-pink-800'> Hôtesse</button>
        <button className='bg-white h-14 w-30 px-2 font-medium hover:font-bold hover:text-pink-800'> Modèle photo</button>
        <div className='border border-white boder-4 w-52 h-14 flex space-x-3 flex items-center justify-center'>
            <div className='flex items-center text-white'>
            <input type="radio"  id='homme' name='genre' /> Homme
            </div>
              <div className='flex items-center text-white'>
                  <input type="radio" id='femme' name='genre' /> Femme
            </div>
        </div>
        <div className='border border-white boder-4 w-64 flex space-x-3'>
              <input type="text" className=' h-14 w-52 flex items-center justify-center bg-transparent placeholder-white focus:outline-none pl-4 text-white' placeholder='Tag,Prénom,Catégorie'/> 
              <div className='flex items-center text-white'>
                 <button className='hover:bg-white h-14 px-2 '>
                    <img src={loupe} className=''/>
                 </button>
              </div>
              
        </div>
          <div className='flex space-x-2 items-center'> <label className='text-white'> Age</label><input type="range"  min="0" max="299" className='form-range' /></div>
        
          <button className='border h-14 px-5 text-white hover:bg-white cursor-pointer hover:text-pink-800'> Recherche avancée</button>
    </div>
  )
}

export default Header2