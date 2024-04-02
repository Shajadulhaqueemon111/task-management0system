import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainRoute from "../MainRoute/MainRoute";
import Error from "../ErrorPage/Error";
import Home from "../Pageses/Home";
import Service from "../Services/Service";

import Contact from "../Contact/Contact";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AddTask from "../AddTask/AddTask";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoute></MainRoute>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/service',
            element:<Service></Service>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/addTask',
            element:<AddTask></AddTask>
        },
      ]

    },
  ]);

  export default router;