/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Navbar() {
  return (
    <nav className="navbar is-dark" style={{ backgroundColor: "rgb(4,19,33)" }}>
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img
              src="https://developers.foleon.com/assets/foleon-white.png"
              alt="Logo"
            />
          </a>
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <a href="#" className="navbar-item has-text-light">Home</a>
            <a href="#" className="navbar-item has-text-light">Examples</a>
            <a href="#" className="navbar-item has-text-light">Features</a>
            <a href="#" className="navbar-item has-text-light">Team</a>
            <a href="#" className="navbar-item has-text-light">Archives</a>
            <a href="#" className="navbar-item has-text-light">Help</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
