import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './route/Home/Home.jsx'
import About from './route/About/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
<Route path='/' element={<Layout/>}>

<Route path='/' element={<Home/>} />
<Route path='about' element={<About/>} />
</Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <RouterProvider router={router}/>
  </StrictMode>,
)
