

import React, { useEffect, useState } from 'react'
import Footer from '../../SCREENS/Footer'
import silde from '../../ASSESTS/Images/image15.png'
import groupe1 from '../../ASSESTS/Images/Groupe1.png'
import groupe2 from '../../ASSESTS/Images/Groupe2.png'
import Slide from '../../SCREENS/Slide'
import Header2 from '../../SCREENS/Header2'
import axios from 'axios'
const apiUrl = process.env.REACT_APP_API_BASE_URL;
const fileUrl= process.env.REACT_APP_FILE_BASE_URL;

function HomePage() {
  const [baseDataItems, setBaseDataItems] = useState<Array<any>>([]);
  const [baseData, setBaseData] = useState<Array<any>>([]);
  const [LoadingData, setLoadingData] = useState<boolean>(true);
  const [sortType, setSortType] = useState<string | null>(null)
  const [searchText, setSearch] = useState<string | null>(null)
  const [rangeValues, setRange] = useState<Array<number>>([])
  useEffect(() => {
    ;(async () => {
        try {
          const [banners, ] = await Promise.all([
            axios.get(apiUrl + 'registrations/get'),
          ])
          setBaseData(banners.data.datas.filter((bd: any) => Number(bd.state) === 1))
          setBaseDataItems(banners.data.datas.filter((bd: any) => Number(bd.state) === 1))
          
        } catch (error) {
          console.error(error)
        }
  
        setLoadingData(false)
  
      })()
  }, [])

  useEffect(() => {
    if(sortType && sortType!== null) {
      let List : any[] = baseDataItems
      if(sortType === "by-new") {
        List = baseDataItems.sort((a: any, b: any) => a.created_at - b.created_at)
      } else if(sortType === "hotess") {
        List = baseDataItems.filter((item: any) => Number(item?.profil_id) === 1 ||  Number(item?.profil_id) === 3)
      }else if(sortType === "model") {
        List = baseDataItems.filter((item: any) => Number(item?.profil_id) === 2 ||  Number(item?.profil_id) === 3)
      }else if(sortType === "men") {
        List = baseDataItems.filter((item: any) => item?.gender === "Homme")
      }else if(sortType === "women") {
        List = baseDataItems.filter((item: any) => item?.gender === "Femme")
      }
      else if(sortType === "search" && searchText) {
        List = baseDataItems.filter((item: any) => {
          return (
            item?.last_name?.toLowerCase().match(searchText.toLowerCase()) ||
          item?.first_name?.toLowerCase().match(searchText.toLowerCase()) ||
          item?.age?.toString().toLowerCase().match(searchText.toLowerCase()) ||
          item?.town?.toLowerCase().match(searchText.toLowerCase()) ||
          item?.size?.toLowerCase().match(searchText.toLowerCase()) ||
          item?.dyed?.toLowerCase().match(searchText.toLowerCase()) ||
          item?.weight?.toString().toLowerCase().match(searchText.toLowerCase()) ||
          item?.shoe_size?.toString().toLowerCase().match(searchText.toLowerCase()) ||
          item?.hair_color?.toLowerCase().match(searchText.toLowerCase()) ||
          item?.hair_type?.toLowerCase().match(searchText.toLowerCase()) ||
          item?.eye_color?.toLowerCase().match(searchText.toLowerCase())
          )
        } )
      }else if(sortType === "range-search" && rangeValues.length) {
        List = baseDataItems.filter((item: any) => Number(item?.age) >= rangeValues[0] && Number(item?.age) <= rangeValues[1])
      }

      setBaseData(List)
    }
  }, [sortType, searchText, rangeValues])

const update = async (data: any) => {
  try {
      await axios.put(apiUrl + 'registrations/update', {id: data?.id, state: 1, likes: Number(data?.likes) + 1}).then((response) => {
          setBaseData(response.data.datas)
      })
  } catch (error) {
      
  }
}
  return<>
    <Slide />
    <Header2 setSortType = {setSortType} setSearch={setSearch} setRange = {setRange}/>
        <div className='grid grid-cols-5 pt-6'>
              {
                  baseData.map((data, index) => {
                    return <div style={{ backgroundImage: `url(${fileUrl}${data?.profil_image})`,  height: 360}} className="profile-item bg-center bg-cover bg-no-repeat w-full cursor-pointer ">
                              
                              <div className=" hover:bg-black h-full hover:opacity-80 pl-5">
                                <div className='profile-item-overlay'>
                                  <i className='fa fa-star mt-6' style={{ fontSize: "20px", color: 'yellow' }}></i>
                                  <i className="fa fa-plus-circle grid place-items-end pr-5" style={{fontSize:"40px",color:'white'}} ></i>
                                  <div className='flex flex-col text-white font-semibold '>
                                    <div>N: {data?.id}</div>
                                    <div> Age : {data?.age} ans</div>
                                    <div> Taille : {data?.size}</div>

                                    <div className='flex space-x-2 my-2'> 
                                      <div><img src={groupe1} className="w-8"/></div>
                                      <div><img src={groupe2} className="w-8" /></div>
                                    </div>

                                <div className='text-4xl font-bold mb-3'>{data?.first_name}</div>
                                
                                <div className='bg-blue-600 w-36 h-8 flex items-center pl-2 space-x-3 my-2 text-sm cursor-pointer'
                                onClick={() => update(data)}
                                >
                                  <i className='fa fa-heart' style={{ color: "#D60A58", fontSize: "20px" }}></i>
                                  <div>J'adore</div>
                                  <div>{data?.likes}</div>
                                </div>

                                <div className='bg-blue-600 w-36 h-8 flex items-center pl-2 space-x-3 mb-2 text-sm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                  <div>Partager</div>
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