import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import A from "./components/A.jsx";
import B from "./components/B.jsx";
import C from "./components/C.jsx";
import D from "./components/D.jsx";
import A1 from "./components/A1.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <A></A>,
        children: [
          {
            path: "A1",
            element: <A1></A1>,
          },
        ],
      },
      {
        path: "B",
        element: <B></B>,
      },
      {
        path: "C",
        element: <C></C>,
      },
      {
        path: "D",
        element: <D></D>,
        children: [
          {
            path: "3",
            element: <A></A>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
