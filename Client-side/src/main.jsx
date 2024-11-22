import {  StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/root/Root";
import About from "./components/about/About";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Blogs from "./components/Blogs/Blogs";
import AdminPanel from "./components/admin/AdminPanel";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: '/about',
        element: <About></About>
  
      },
      {
        path: '/project',
        element: <Project></Project>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/admin',
        element: <AdminPanel></AdminPanel>
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
