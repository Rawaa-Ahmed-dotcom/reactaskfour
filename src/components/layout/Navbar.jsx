import React from 'react'
import { NavLink } from 'react-router'

export  function Navbar() {
  return (
    <nav className="flex justify-between items-center pt-[3em] px-[3em]">
        <h1 className="font-[500] text-[40px] text-[#2A3238] font-[Inter]">Logo</h1>
        <ul className="flex items-center gap-[2em]">
            <NavLink to={"/home"} className="font-[500] text-[20px] text-[#2A323899] font-[Inter]">Home</NavLink>
            <NavLink to={"/services"} className="font-[500] text-[20px] text-[#2A323899] font-[Inter]">Services</NavLink>
            <NavLink to={"/about"} className="font-[500] text-[20px] text-[#2A323899] font-[Inter]">About</NavLink>
            <NavLink to={"/contact-us"} className="font-[500] text-[20px] text-[#2A323899] font-[Inter]">Contact us</NavLink>
        </ul>
        <div className="login-link font-[Inter] w-fit bg-[#2A3238] py-[0.7em] px-[1.5em] rounded-[20px] text-white">
            <NavLink to = {"/login"}>Log In</NavLink>
        </div>
    </nav>
  )
}
