import React from 'react'
import logo from '../../ASSESTS/Images/logo1.png'
import user from '../../ASSESTS/Images/user-circle.png'
import {  Link } from "react-router-dom";

function Header() {
  return (
        <div className='bg-black w-full h-24 px-8 flex justify-center'>
             <div className="w-full max-width flex items-center justify-between">
               <div className="left-side flex items-center space-x-32 ">
          <Link to="/"><div className='w-60'><img src={logo} /></div></Link>
                <div className="flex space-x-5  text-sm">
                  <Link to="/"><div className='text-white hover:underline font-bold'>ACCUEIL</div></Link>
                  <Link to="/klaman"><div className='text-white hover:underline font-bold'>KLAMAN</div></Link>
                  <Link to="/portofolio"><div className='text-white hover:underline font-bold'>PORTOFOLIO</div></Link>
                  <Link to="/register"><div className='text-white hover:underline font-bold'>NOUS REJOINDRE</div></Link>
                  <div className='text-white hover:underline font-bold'>NOUS CONTACTER</div>
                </div>
              </div>

              <div className='flex space-x-4 text-sm divide-x '>
                <div className='text-white font-bold flex space-x-2 items-center'><img src={user} style={{ width: "15px", height: "15px" }} /> <span>CONNEXION</span></div>
              </div>
             </div>
        </div>
  )
}

export default Header;

