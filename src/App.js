import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home/Home";
import User from "./Pages/Users/User";
import Products from "./Pages/Product/Products";
import Navbar from "./Components/Navbar/Navbar";
import Menu from "./Components/Menu/Menu";
import Login from "./Pages/Login/Login";
import "./styles/global.scss"

const App = () => {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/user",
          element: <User />,
        },
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },

    {
      path : "/login",
      element : <Login />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
