import React from 'react'

export default function LoginPage() {
  return (
    <main className = "w-full h-screen flex justify-center items-center">
        <form className="w-[30%] h-[30em] flex flex-col gap-[1em] p-[2em] bg-[#2A3238] justify-center items-center rounded-[10px]">
        <h2 className = "text-white text-[40px]">Login User</h2>
        <input type="email" placeholder="Enter Your Email" className="w-full bg-white rounded-[4px] p-[10px]"/>
        <input type="password" placeholder="Enter Your Password" className="w-full bg-white rounded-[4px] p-[10px]"/>
    </form>
    </main>
  )
}
