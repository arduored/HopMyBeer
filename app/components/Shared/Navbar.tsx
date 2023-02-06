import { Link } from "@remix-run/react";
import { useDrawer } from "./Drawer";
import MenuIcon from "./Icons/MenuIcon";

export default function Navbar() {
  const { isOpen, toggle: toggleDrawer } = useDrawer();

  return (
    <div className="navbar-wrapper">
      <Link to="/" className="navbar-title">
        <img src="/images/hop.png" width={48} height={48} />
        <h1>HopMyBeer</h1>
      </Link>
      <div
        className={`navbar-menu ${isOpen ? "active" : ""}`}
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </div>
    </div>
  );
}
