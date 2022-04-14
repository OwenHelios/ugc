import { Link } from 'react-router-dom'
import 'styles/Header.css'
import DarkModeToggle from 'components/DarkModeToggle'

const Header = () => {
  return (
    <div className="header">
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
