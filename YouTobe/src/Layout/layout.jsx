import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function layout() {
  
 
  return (
    <div className='max-w-7xl flex flex-col items-center justify-between m-auto my-0.5'>
      <Navbar/>
      <div className='w-full flex  justify-between flec-col max-md:flex-wrap-reverse' >
        <div className='w-3/12 max-md:w-2/12'>
           <Sidebar /> 
           </div>
          <div className='w-9/12 max-md:w-10/12'>
            <Outlet/>
         </div>
      </div>
    </div>
  )
}
