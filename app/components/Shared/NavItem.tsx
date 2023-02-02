import ListIcon from "./Icons/ListIcon";

type NavItemProps = {
  name: string;
  path: string;
  icon?: JSX.Element;
};

export default function NavItem({ name, path, icon }: NavItemProps) {
  return (
    <a href={path}>
      <div className="nav-icon">{icon}</div>
      {/* <div className="navbar-item-label">{name}</div> */}
    </a>
  );
}
