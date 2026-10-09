import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="navbar">
      <NavLink className="brand" to="/simple">
        <span className="brand-mark">+</span>
        <span>Calc Lab</span>
      </NavLink>

      <nav className="nav-links" aria-label="Calculator modes">
        <NavLink
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          to="/simple"
        >
          Simple
        </NavLink>
        <NavLink
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          to="/advanced"
        >
          Advanced
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
