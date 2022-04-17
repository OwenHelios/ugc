import { useRef } from 'react'
import 'styles/Sidebar.css'
import { FaSignInAlt, FaSignOutAlt, FaUser, FaDashcube } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { logout, reset } from 'auth/authSlice'
import { useAppDispatch, useAppSelector } from 'typedhooks'

const Sidebar = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(state => state.auth)

  const handleLogOut = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

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
            {user ? (
              <>
                <li className="sidebar-list-item">
                  <button onClick={handleLogOut} className="sidebar-list-link">
                    <FaSignOutAlt />
                    <span className="sidebar-list-text">Log out</span>
                  </button>
                </li>
                <li className="sidebar-list-item">
                  <Link className="sidebar-list-link" to="/dashboard">
                    <FaDashcube />
                    <span className="sidebar-list-text">Dashboard</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="sidebar-list-item">
                  <Link className="sidebar-list-link" to="/login">
                    <FaSignInAlt />
                    <span className="sidebar-list-text">Log in</span>
                  </Link>
                </li>
                <li className="sidebar-list-item">
                  <Link className="sidebar-list-link" to="/register">
                    <FaUser />
                    <span className="sidebar-list-text">Register</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </aside>
      <div className="overlay" onClick={closeSidebar}></div>
    </>
  )
}

export default Sidebar
