import { Link } from 'react-router-dom'
import 'styles/Header.css'
import DarkModeToggle from 'components/DarkModeToggle'
import { FiMenu } from 'react-icons/fi'
const Header = () => {
  const openSidebar = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar?.classList.add('open')
  }
  return (
    <div className="header">
      <button className="hamburger-btn" onClick={openSidebar}>
        <i>
          <FiMenu />
        </i>
      </button>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/fire">ff</Link>
        </li>
        <li>
          <Link to="/water">wtr</Link>
        </li>
      </ul>
      <DarkModeToggle />
    </div>
  )
}

export default Header
