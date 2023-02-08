import React, { useState } from 'react'
import loupe from "../../ASSESTS/Images/loupe.png"
import Slider from '@mui/material/Slider';
const minDistance = 1;

function valuetext(value: number) {
  return `${value}°C`;
}


function Header2({setSortType, setSearch, setRange}: any) {
  const [advancedSearch, setAdvancedSearch]= useState<boolean>(false)
  const [value1, setValue1] = React.useState<number[]>([10, 30]);
  const [text, setText] = useState<string>('')
  const search = () => {
    setSortType('search')
    setSearch(text)
  }
  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    setSortType('range-search')
    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
      setRange([Math.min(newValue[0], value1[1] - minDistance), value1[1]])
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
      setRange([value1[0], Math.max(newValue[1], value1[0] + minDistance)])
    }
  };
  return (
    <>
    <div className='bg-pink-800 h-20 w-full flex items-center justify-between px-3'>
        <button className='bg-white h-14 w-30 px-5 font-medium hover:font-bold hover:text-pink-800 '
        onClick={() => setSortType('by-new')}
        > Nouveau</button>
        <button className='bg-white h-14 w-30 px-5 font-medium hover:font-bold hover:text-pink-800'
        onClick={() => setSortType('hotess')}
        > Hôtesse</button>
        <button className='bg-white h-14 w-30 px-2 font-medium hover:font-bold hover:text-pink-800'
        onClick={() => setSortType('model')}
        > Modèle photo</button>
        <div className='border border-white boder-4 w-52 h-14 flex space-x-3 flex items-center justify-center'>
            <div className='flex items-center text-white'>
            <input type="radio"  id='homme' name='genre' onChange={() =>setSortType('men')} /> Homme
            </div>
              <div className='flex items-center text-white'>
                  <input type="radio" id='femme' name='genre' onChange={() =>setSortType('women')} /> Femme
            </div>
        </div>
        <div className='border border-white boder-4 w-64 flex space-x-3'>
              <input value={text} type="text" className=' h-14 w-52 flex items-center justify-center bg-transparent placeholder-white focus:outline-none pl-4 text-white'
              onChange={({target}: any) => setText(target.value)}
              placeholder='Tag, Prénom, Catégorie'/> 
              <div className='flex items-center text-white'>
                 <button className='bg-white h-14 px-2 '
                 onClick={() => search()}
                 >
                    <img src={loupe} className=''/>
                 </button>
              </div>
              
        </div>
          <div className='flex mr-2 items-center'> 
          <label className='text-white mr-2'> Age</label>
            <Slider
            className='ml-3'
            getAriaLabel={() => 'Minimum distance'}
            value={value1}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
          />
          </div>
        
          {/* <button 
          onClick={() => setAdvancedSearch(!advancedSearch)}
          className='ml-2 border h-14 px-5 text-white hover:bg-white cursor-pointer hover:text-pink-800'> Recherche avancée</button> */}

          
    </div>
    {/* <div className="w-full bg-white h-52"></div> */}
    </>
  )
}

export default Header2