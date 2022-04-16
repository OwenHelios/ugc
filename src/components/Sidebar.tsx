import { useRef } from 'react'
import 'styles/Sidebar.css'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const sidebarRef = useRef<HTMLElement>(null)
  const closeSidebar = () => {
    sidebarRef.current?.classList.remove('open')
  }
  return (
    <>
      <aside ref={sidebarRef} className="sidebar">
        <h1>Sidebar</h1>
        <div className="sidebar-inner">
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <Link className="sidebar-list-link" to="/">
                <FaSignInAlt />
                <span className="sidebar-list-text">Login</span>
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link className="sidebar-list-link" to="#">
                <FaUser />
                <span className="sidebar-list-text">Register</span>
              </Link>
            </li>
            <li className="sidebar-list-item"></li>
          </ul>
        </div>
      </aside>
      <div className="overlay" onClick={closeSidebar}></div>
    </>
  )
}

export default Sidebar
