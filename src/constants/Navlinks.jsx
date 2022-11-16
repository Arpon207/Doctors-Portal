import { NavLink } from "react-router-dom";

const links = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/appointment",
    name: "Appointment",
  },
  {
    path: "/reviews",
    name: "Reviews",
  },
  {
    path: "/contact-us",
    name: "Contact Us",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/login",
    name: "Login",
  },
];

const active = {
  backgroundColor: "#3A4256",
  color: "white",
  borderRadius: ".5rem",
};

const Navlinks = (
  <>
    {links.map(({ path, name }, i) => (
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-[#3A4256] text-white rounded" : undefined
          }
          to={path}
        >
          {name}
        </NavLink>
      </li>
    ))}
  </>
);

export default Navlinks;
