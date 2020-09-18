import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"

// Main:
const Sidebar = ({ isOpen, toggleSidebar }) => {
  // Hard Code para poder trabajar:
  // const isOpen = false
  // El funcionamiento ira en LAYOUT, ya que es el padre de ambos. (sidebar y navbar)
  return (
    <aside className={`sidebar ${isOpen ? " show-sidebar" : " "}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes></FaTimes>
      </button>
      <div className="side-container">
        <Links styleClass={`${isOpen ? "sidebar-links" : ""}`}></Links>
        <SocialLinks
          styleClass={`${isOpen ? "sidebar-icons" : ""}`}
        ></SocialLinks>
      </div>
    </aside>
  )
}

export default Sidebar
