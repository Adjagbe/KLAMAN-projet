import React from "react";

function Pagination() {
  return <div className='flex space-x-4 my-8'> {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((data, index)=>{
    return <div className='bg-pink-800 rounded-full w-8 h-8 flex items-center justify-center text-white'>01</div>
})}</div>
}

export default Pagination;
