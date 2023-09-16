import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { GlobalStyle } from './componets/Styles/Styles';
import Feedback from './pages/Feedback/index.jsx';





const router = createBrowserRouter ([
   { path:'/',
  element: <App/>, children: [
      { path: '/', element:<Home/>},
      { path: '/login', element: <Login/>},
      { path: '/register', element: <Register/>},
      {path: '/dashboard', element: <Dashboard/>},
      {path: '/feedback', element: <Feedback/>},
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    
    <GlobalStyle/>
  
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
