import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">MovieBook</h2>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/">Movies</a>
        <a href="/">Theatres</a>
      </div>

      <button className="menu-btn">☰</button>
    </nav>
  );
};

export default Navbar;