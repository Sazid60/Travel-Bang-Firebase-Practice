import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Booking from "../Pages/Booking/Booking";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";




const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children : [
        {
            path: "/",
            element:<Home></Home>,  
        },
        {
            path: "/booking",
            element:<Booking></Booking>,  
        },
        {
            path: "/login",
            element:<Login></Login>,  
        },
        {
            path: "/register",
            element:<Register></Register>,  
        },

      ]
    },
  ]);

  export default router