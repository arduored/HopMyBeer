import ListIcon from "./Icons/ListIcon";

type NavItemProps = {
  name: string;
  path: string;
  icon?: JSX.Element;
};

export default function NavItem({ name, path, icon }: NavItemProps) {
  return (
    <a href={path} className="nav-item">
      <div className="nav-item-label">{name}</div>
      <div className="nav-icon">{icon}</div>
    </a>
  );
}
