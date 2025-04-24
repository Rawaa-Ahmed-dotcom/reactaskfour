import React from 'react'
import { ContactMethods } from '../components/layout/ContactMethods'
import { createBrowserRouter, Outlet } from 'react-router'
export  function ContactusPage() {
 
  return (
    <> 
    <div className="px-[2em] w-full h-screen flex items-center gap-[10em] justify-center font-[500] ">
    <ContactMethods/>
    <Outlet/>
    </div>
    </>
  )
}
