import { useRef } from 'react'
import 'styles/Sidebar.css'
import { FiUser, FiUserPlus } from 'react-icons/fi'

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
              <a className="sidebar-list-link" href="#">
                <FiUser />
                <span className="sidebar-list-text">Login</span>
              </a>
            </li>
            <li className="sidebar-list-item">
              <a className="sidebar-list-link" href="#">
                <FiUserPlus />
                <span className="sidebar-list-text">Sign Up</span>
              </a>
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
