import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingpage/LandingPage'
import BlogsPage from './pages/blogspage/BlogsPage'
import WorkPage from './pages/workpage/WorkPage'
import ContactsPage from './pages/contactspage/ContactsPage'
import Navbar from './components/navbarcomponents/Navbar'
import Footer from './components/footercomponent/Footer'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/blogs" element={<BlogsPage/>}/>
        <Route path="/work" element={<WorkPage/>}/>
        <Route path="/contact" element={<ContactsPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}
