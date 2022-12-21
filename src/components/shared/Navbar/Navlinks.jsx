import { Link, NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../Firebase/firebase.init";
import { signOut } from "firebase/auth";
import links from "./../../../constants/links";

const Navlinks = () => {
  const [user] = useAuthState(auth);
  const slicedLinks = links.slice(0, -1);
  return (
    <>
      {slicedLinks.map(({ path, name }, i) => (
        <li key={i}>
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
      {user ? (
        <li tabIndex={0}>
          <a className="justify-between">
            Account
            <svg
              className="fill-current lg:rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </a>
          <ul className="p-2 bg-base-100">
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <a
                onClick={() => {
                  signOut(auth);
                  localStorage.removeItem("accessToken");
                }}
              >
                Signout
              </a>
            </li>
          </ul>
        </li>
      ) : (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-[#3A4256] text-white rounded" : undefined
            }
            to={links.slice(-1)[0].path}
          >
            {links.slice(-1)[0].name}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default Navlinks;
