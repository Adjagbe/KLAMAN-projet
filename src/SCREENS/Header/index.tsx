import React from 'react'
import logo from '../../ASSESTS/Images/logo.png'
import user from '../../ASSESTS/Images/user-circle.png'
import {  Link } from "react-router-dom";

function Header() {
  return (
    <div>
        <div className='bg-black w-screen h-24 flex items-center space-x-32 px-8'>
            <div className='w-60'><img src={logo}/></div>
            <div className="flex space-x-5  text-sm">
            <Link to="/"><div className='text-white hover:underline font-bold'>ACCUEIL</div></Link>
            <Link to="/klaman"><div className='text-white hover:underline font-bold'>KLAMAN</div></Link>
            <Link to="/portofolio"><div className='text-white hover:underline font-bold'>PORTOFOLIO</div></Link>
            <div className='text-white hover:underline font-bold'>NOUS REJOINDRE</div>
            <div className='text-white hover:underline font-bold'>NOUS CONTACTER</div>
            </div>

            <div className='flex space-x-4 text-sm divide-x '>
          <div className='text-white font-bold flex space-x-2 items-center'><img src={user} style={{ width: "15px", height: "15px" }} /> <span>CONNEXION</span></div>
          <div className='text-white font-bold flex space-x-2 items-center pl-2'><img src={user} style={{ width: "15px", height: "15px" }} /> <span>MON CATALOG</span></div>
            </div>
        </div>
    </div>
  )
}

export default Header;

