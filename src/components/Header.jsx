import { NavLink } from "react-router-dom";

export function Header({ identity, navigation }) {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="Go to home">
        <span className="brand-mark">VH</span>
        <span className="brand-copy">
          <strong>{identity.name}</strong>
          <span>{identity.role}</span>
        </span>
      </NavLink>

      <nav className="nav-links" aria-label="Primary navigation">
        {navigation.map((item) => (
          <NavLink
            key={item.href}
            className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
            to={item.href}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="status-pill">{identity.status}</div>
    </header>
  );
}
