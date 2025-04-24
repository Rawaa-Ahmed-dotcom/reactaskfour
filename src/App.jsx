
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import {Layout} from "./components/layout/Layout.jsx";
import {HomePage} from "./pages/HomePage.jsx";
import {ContactusPage} from "./pages/ContactusPage.jsx";
import {ServicesPage} from "./pages/ServicesPage.jsx";
import {AboutPage} from "./pages/AboutPage.jsx";
import { ErrorPage } from './pages/ErrorPage.jsx';
import {ContactForms} from "./pages/ContactForms.jsx";
import {ContactEmails} from "./pages/ContactEmails.jsx";
import {ContactLocations} from "./pages/ContactLocations.jsx";
import {PhoneNumbers} from "./pages/PhoneNumbers.jsx";

import LoginPage from './pages/LoginPage';
export function App() {
  let routing = createBrowserRouter([
    {path : "/",element:<Layout/>,children:[
      {path : "/home",element:<HomePage/>},
      {path: "/about",element:<AboutPage/>},
      {path : "/services",element: <ServicesPage/>},
      {path : "/contact-us",element:<ContactusPage/>,children : [
        {path : "/contact-us/forms",element: <ContactForms/>},
        {path : "/contact-us/emails",element: <ContactEmails/>},
        {path : "/contact-us/locations",element: <ContactLocations/>},
        {path : "/contact-us/phone-numbers",element: <PhoneNumbers/>},
      ]},
      {path : "/login",element:<LoginPage/>},
      {path : "*",element: <ErrorPage/>}
    ]}
  ])
  return (
    <>
      <RouterProvider router={routing}/>
    </>
  )
}


