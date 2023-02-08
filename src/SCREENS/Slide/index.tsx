import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import silde from '../../ASSESTS/Images/image15.png'
const apiUrl = process.env.REACT_APP_API_BASE_URL;
const fileUrl= process.env.REACT_APP_FILE_BASE_URL;


function Slide() {
  const [baseData, setBaseData] = useState<Array<any>>([]);
  const [LoadingData, setLoadingData] = useState<boolean>(true);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  useEffect(() => {
    ;(async () => {
        try {
          const [banners, ] = await Promise.all([
            axios.get(apiUrl + 'banner/get'),
          ])
          setBaseData(banners.data.datas.filter((bd: any) => Number(bd.is_banner_active) === 1))
          
        } catch (error) {
          console.error(error)
        }
  
        setLoadingData(false)
  
      })()
}, [])
  return <div className="w-full">

  <Carousel responsive={responsive} 
    autoPlaySpeed={1000}
    rewind={true}
    autoPlay={true}>
      {baseData.map((data, index) => {
            return <div style={{backgroundImage: `url(${fileUrl}${data?.image})`, height: 360}} className="profile-item bg-center bg-cover bg-no-repeat w-full h-full cursor-pointer "/>
      })}
    </Carousel>;
  </div>
}

export default Slide