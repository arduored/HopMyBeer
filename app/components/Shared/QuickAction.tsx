import { Link } from "@remix-run/react";

type QuickActionProps = {
  icon: JSX.Element;
};

export default function QuickAction({ icon }: QuickActionProps) {
  return (
    <div className="quick-action">
      <Link to="/beers/new">{icon}</Link>
    </div>
  );
}
