import React from 'react'
import { NavLink } from 'react-router'

export  function ContactMethods() {
  return (
    <div className="bg-[rgb(42,50,56)] w-[13em] h-[15em] rounded-[15px] p-[1em] text-[1.25em] flex flex-col gap-[1em] contact-links">
      <NavLink className=" font-[500] text-[20px] text-[#FFFFFF99] block" to="/contact-us/forms" end>Contact us Forms</NavLink>
      <NavLink className=" font-[500] text-[20px] text-[#FFFFFF99] block" to="/contact-us/emails" >Contact us Emails</NavLink>
      <NavLink className=" font-[500] text-[20px] text-[#FFFFFF99] block" to="/contact-us/locations" >Contact us Locations</NavLink>
      <NavLink className=" font-[500] text-[20px] text-[#FFFFFF99] block" to="/contact-us/phone-numbers" >Contact us Phone Numbers</NavLink>
    </div>
  )
}
