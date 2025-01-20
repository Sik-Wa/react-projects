import {Outlet} from 'react-router-dom'
import Header from './route/Header/Header'
import Footer from './route/Footer/Footer'


function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
