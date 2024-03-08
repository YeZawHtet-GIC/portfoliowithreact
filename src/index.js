import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//rrd
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Service from "./components/Service";
import Home from "./components/Home";
import Hero from "./components/Hero";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Hero />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <h1>404</h1>,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/services",
        element: <Service />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
