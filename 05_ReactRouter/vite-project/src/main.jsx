import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from '../src/Layout.jsx'
import Home from '../Components/Home.jsx'
import About from '../Components/About.jsx'
import Contact from '../Components/Contact.jsx'
import User from '../Components/User.jsx'
import Github, { githubInfoLoader } from '../Components/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);


