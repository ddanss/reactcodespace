import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProSidebarProvider } from 'react-pro-sidebar';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import SideMenu from './SideMenu';
import Tensorflow from './Tensorflow';

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div>
        <SideMenu/>
        <main></main>
        </div>,
    children: [
      {
        path: "/App",
        element: <App/>
      },
      {
        path: "/Tensorflow",
        element: <Tensorflow/>
      }
    ]
  },
  {
    path: "/App",
    element: <App/>
  },
  {
    path: "/Tensorflow",
    element: <Tensorflow/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProSidebarProvider>
      <RouterProvider router={router} />
    </ProSidebarProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
