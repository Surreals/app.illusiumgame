import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { MainPage } from './pages/MainPage';
import { ProfilePage } from './pages/ProfilePage';

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <MainPage/>,
      },
      {
        path: "/profile",
        element: <ProfilePage/>,
      },
      {path: "*", element: <Navigate to='/' replace/>}
    ]
  }
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
