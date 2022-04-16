import { Link } from 'react-router-dom'
import 'styles/Header.css'
import DarkModeToggle from 'components/DarkModeToggle'
import { FiMenu, FiGithub } from 'react-icons/fi'
const Header = () => {
  const openSidebar = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar?.classList.add('open')
  }
  return (
    <header className="header">
      <div className="header-content left">
        <button className="hamburger-btn" onClick={openSidebar}>
          <i>
            <FiMenu />
          </i>
        </button>
      </div>
      <div className="header-content right">
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
        <a className="github" href="https://github.com/OwenHelios/ugc">
          <i>
            <FiGithub />
          </i>
        </a>
        <DarkModeToggle />
      </div>
    </header>
  )
}

export default Header
