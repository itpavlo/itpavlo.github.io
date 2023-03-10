import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'rsuite/dist/rsuite.min.css'
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./common/router";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
      <RouterProvider router={router} />
  // </React.StrictMode>
);

