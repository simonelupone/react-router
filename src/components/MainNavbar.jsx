import { NavLink } from "react-router-dom";

const links = [
  { path: "/", label: "Homepage" },
  { path: "/about", label: "About" },
  { path: "/products", label: "Products" },
];

const MainNavbar = () => {
  return (
    <header>
      <nav className="p-4">
        <ul className="flex gap-4 font-mono text-lg">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink to={link.path}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavbar;
