import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'rsuite/dist/rsuite.min.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./common/router";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  // </React.StrictMode>
);

