import React from 'react'
import {Navbar} from "./Navbar.jsx";
import { Outlet } from 'react-router';
export  function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}
