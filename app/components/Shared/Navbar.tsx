import { Link } from "@remix-run/react";
import { useDrawer } from "./Drawer";

type NavbarProps = {
  routes: { name: string; href: string; icon?: JSX.Element }[];
};

export default function Navbar({ routes }: NavbarProps) {
  const toggleDrawer = useDrawer((state) => state.toggle);

  return (
    <div className="navbar-wrapper">
      <Link to="/" className="navbar-title">
        <img src="/images/hop.png" width={48} height={48} />
        <h1>HopMyBeer</h1>
      </Link>
      <button onClick={toggleDrawer}>MENU</button>
    </div>
  );
}
