import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  // Funcionamiento Toggle SideBar:
  // State que contendrá la Bool, con inicio False
  const [isOpen, setIsOpen] = React.useState(false)
  // Function que Cambiará dicho State a su NEGATIVO
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar}></Navbar>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}></Sidebar>
      {children}
      <Footer></Footer>
    </>
  )
}

export default Layout
