export function Footer({ identity }) {
  return (
    <footer className="site-footer">
      <p>
        {identity.name} / {identity.role}
      </p>
      <p>{identity.location}</p>
    </footer>
  );
}
