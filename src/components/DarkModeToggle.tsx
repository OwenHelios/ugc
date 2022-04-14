import { FiSun } from 'react-icons/fi'
import { FiMoon } from 'react-icons/fi'
import 'styles/DarkModeToggle.css'

const DarkModeToggle = () => {
  const toggleTheme = () => {
    const root = document.getElementById('root')
    root?.classList.toggle('dark')
  }
  return (
    <div className="toggle-wrapper">
      <input id="toggle_input" type="checkbox" onChange={toggleTheme} />
      <label htmlFor="toggle_input" className="toggle-switch">
        <i className="moon">
          <FiMoon />
        </i>
        <i className="sun">
          <FiSun />
        </i>
      </label>
    </div>
  )
}

export default DarkModeToggle
