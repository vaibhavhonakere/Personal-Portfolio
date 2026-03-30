export function Header({ identity, navigation }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Go to top">
        <span className="brand-mark">VH</span>
        <span className="brand-copy">
          <strong>{identity.name}</strong>
          <span>{identity.role}</span>
        </span>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.href} className="nav-link" href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="status-pill">{identity.status}</div>
    </header>
  );
}
