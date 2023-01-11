import React from 'react'
import logo from '../../ASSESTS/Images/logo.png'

function Header() {
  return (
    <div>
        <div className='bg-black w-screen h-24 flex items-center space-x-36 px-10'>
            <div className='w-60'><img src={logo}/></div>
            <div className="flex space-x-5  text-sm">
              <div className='text-white hover:underline'>ACCUEIL</div>
                  <div className='text-white hover:underline'>KLAMAN</div>
                  <div className='text-white hover:underline'>PORTOFOLIO</div>
                  <div className='text-white hover:underline'>NOUS REJOINDRE</div>
                  <div className='text-white hover:underline'>NOUS CONTACTER</div>
            </div>

            <div className='flex space-x-6 text-sm divide-x'>
                <div className='text-white'>CONNEXION</div>
                <div className='text-white'>MON CATALOG</div>
            </div>
        </div>
    </div>
  )
}

export default Header