

import React from 'react'
import Footer from '../../SCREENS/Footer'
import silde from '../../ASSESTS/Images/image15.png'
import groupe1 from '../../ASSESTS/Images/Groupe1.png'
import groupe2 from '../../ASSESTS/Images/Groupe2.png'

function HomePage() {
  return<>
        <div className='grid grid-cols-5 pt-6'>
              {
                  [0, 1, 2, 3, 4,5,6,7,8,9].map((data, index) => {
                    return <div style={{ backgroundImage: `url(${silde})`, height: 600}} className="profile-item bg-center bg-cover bg-no-repeat w-full cursor-pointer ">
                              
                              <div className=" hover:bg-black h-full hover:opacity-80 pl-5">
                                <div className='profile-item-overlay'>
                                  <i className='fa fa-star mt-6' style={{ fontSize: "20px", color: 'yellow' }}></i>
                                  <i className="fa fa-plus-circle grid place-items-end pr-5" style={{fontSize:"40px",color:'white'}} ></i>
                                  <div className='flex flex-col text-white font-semibold '>
                                    <div>N : 0234</div>
                                    <div> Age : 16 ans</div>
                                    <div> Taille : 1m78</div>

                                    <div className='flex space-x-2 my-2'> 
                                      <div><img src={groupe1} className="w-8"/></div>
                                      <div><img src={groupe2} className="w-8" /></div>
                                    </div>

                                    <div className='text-4xl font-bold mb-3'> Belinda</div>
                                    
                                    <div className='bg-blue-600 w-36 h-8 flex items-center pl-2 space-x-3 my-2 text-sm'>
                                      <i className='fa fa-heart' style={{ color: "#D60A58", fontSize: "20px" }}></i>
                                      <div>J'adore</div>
                                      <div>12</div>
                                    </div>

                                    <div className='bg-blue-600 w-36 h-8 flex items-center pl-2 space-x-3 mb-2 text-sm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                        </svg>
                                      <div>Partager</div>
                                      <div>45</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                      
                  })
              }
        </div>
        <Footer/>

    </>
  }

export default HomePage