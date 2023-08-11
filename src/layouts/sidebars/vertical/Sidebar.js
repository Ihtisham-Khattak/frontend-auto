import { Button, Nav, NavItem } from "reactstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import Login from "../../../../pages/ui/login";
import { useState } from "react";

const navigation = [
  {
    title: "Dashboard",
    href: "/",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Product",
    href: "/ui/product",
    icon: "bi bi-bucket",
  },
  {
    title: "Categories",
    href: "/ui/catogries",
    icon: "bi bi-bucket",
  },
  {
    title: "Orders",
    href: "/ui/order",
    icon: "bi bi-bucket",
  },
  {
    title: "Admin",
    href: "/ui/admin",
    icon: "bi bi-bucket",
  },
  {
    title: "Setting",
    href: "/ui/setting",
    icon: "bi bi-bucket",
  },
  {
    title: "Logout",
    href: "/ui/login",
    icon: "bi bi-bucket",
  },
  {
    title: "Alert",
    href: "/ui/alerts",
    icon: "bi bi-bell",
  },
  {
    title: "Badges",
    href: "/ui/badges",
    icon: "bi bi-patch-check",
  },
  {
    title: "Buttons",
    href: "/ui/buttons",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Cards",
    href: "/ui/cards",
    icon: "bi bi-card-text",
  },
  {
    title: "Grid",
    href: "/ui/grid",
    icon: "bi bi-columns",
  },
  {
    title: "Table",
    href: "/ui/tables",
    icon: "bi bi-layout-split",
  },
  {
    title: "Forms",
    href: "/ui/forms",
    icon: "bi bi-textarea-resize",
  },
  {
    title: "Breadcrumbs",
    href: "/ui/breadcrumbs",
    icon: "bi bi-link",
  },
  // {
  //   title: "About",
  //   href: "/about",
  //   icon: "bi bi-people",
  // },
];

const Sidebar = ({ showMobilemenu }) => {
  let curl = useRouter();
  const location = curl.pathname;

  debugger;
  const [logOut, setLogOut] = useState(false);
  const handleLogOut = () => {
    setLogOut(true);
  };

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <h2 href="/" className="text-center mx-auto cursor-pointer">
          J-Autos
        </h2>
        <div className="d-lg-none">
          <Button close size="sm" onClick={showMobilemenu} />
        </div>
      </div>

      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link href={navi.href}>
                <a
                  className={
                    location === navi.href
                      ? "text-primary nav-link py-3"
                      : "nav-link text-secondary py-3"
                  }
                >
                  <span className="ms-3 d-inline-block">
                    {/* <i className={navi.icon}></i> */}

                    {navi.title}
                  </span>
                </a>
              </Link>
            </NavItem>
          ))}
          <NavItem>
            <Button onClick={handleLogOut}> {logOut && <Login />}</Button>
           
          </NavItem>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
