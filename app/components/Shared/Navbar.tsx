import NavItem from "./NavItem";

type NavbarProps = {
  routes: { name: string; href: string; icon?: JSX.Element }[];
};

export default function Navbar({ routes }: NavbarProps) {
  return (
    <div className="navbar-wrapper">
      {routes.map(({ name, href, icon }) => (
        <NavItem key={name} path={href} name={name} icon={icon} />
      ))}
    </div>
  );
}
