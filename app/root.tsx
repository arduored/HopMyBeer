import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Drawer from "./components/Shared/Drawer";
import ListIcon from "./components/Shared/Icons/ListIcon";
import SearchIcon from "./components/Shared/Icons/SearchIcon";
import StoreIcon from "./components/Shared/Icons/StoreIcon";

import Navbar from "./components/Shared/Navbar";
import NavItem from "./components/Shared/NavItem";
import styles from "./styles/shared.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "HopMyBeer",
  viewport: "width=device-width,initial-scale=1",
});

const navItems: { name: string; href: string; icon?: JSX.Element }[] = [
  { name: "All", href: "/beers", icon: <ListIcon /> },
  {
    name: "Explore",
    href: "/explore",
    icon: <SearchIcon />,
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <Scripts href="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" />
      </head>
      <body>
        <Navbar routes={navItems} />
        <Drawer origin="right">
          {navItems.map((item) => (
            <NavItem
              key={item.name}
              name={item.name}
              path={item.href}
              icon={item.icon}
            />
          ))}
        </Drawer>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
