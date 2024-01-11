// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home/Home';
import ContactUs from './pages/ContactUs/ContactUs';
import ManageProduct from './pages/ManageProduct/ManageProduct';
import AddProduct from './pages/AddProduct/AddProduct';
import AddReview from './pages/AddReview/AddReview';
import ApartmentDetails from './pages/Details/ApartmentDetails';
// import VehicleDetails from './pages/ProductDetails/VehicleDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      loader: function() {
        return fetch(`http://localhost:3000/all-vehicles`)
      }
    },
    {
      path: "/contact-us",
      element: <ContactUs/>
    },
    {
      path: "/manage-product",
      element: <ManageProduct/>,
      loader: function() {
        return fetch(`http://localhost:3000/all-vehicles`)
      }
    },
    {
      path: "/add-product",
      element: <AddProduct/>
    },
    {
      path: "/add-review",
      element: <AddReview/>
    },
    {
      path: "/view-prop",
      element: <ApartmentDetails></ApartmentDetails>
    }
  ])
  
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
