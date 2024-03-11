import React from 'react';
import {
    createBrowserRouter,
    Link,
    Route,
    RouterProvider,
    Routes,
  } from "react-router-dom";
import Home from '../sections/Home';
import Skills from '../sections/Skills';

const router = createBrowserRouter([
    { path: "/", Component: Home }, // 🆕
    { path: "*", Component: Root },
  ]);
  
  export default function AppRouter() {
    return <RouterProvider router={router} />;
  }
  
  function Root() {
    return (
      <Routes>
        {/* ⬆️ Home route lifted up to the data router */}
        <Route path="/*" element={<Home/>} />
        <Route path="/skils/*" element={<Skills/>} />
      </Routes>
    );
  }