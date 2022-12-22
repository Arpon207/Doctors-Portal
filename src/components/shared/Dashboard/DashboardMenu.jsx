import { Link } from "react-router-dom";
import useAdmin from "./../../../hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../../../Firebase/firebase.init";

const DashboardMenu = () => {
  const [user] = useAuthState(auth);
  const { data } = useAdmin(user);
  return (
    <div className="dropdown lg:hidden">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <ul
        tabIndex="0"
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link to={"/dashboard"}>My Appointments</Link>
        </li>
        <li>
          <Link to={"/dashboard/my-reviews"}>My Reviews</Link>
        </li>
        {data?.admin ? (
          <>
            <li>
              <Link to={"/dashboard/users"}>All Users</Link>
            </li>
            <li>
              <Link to={"/dashboard/add-doctor"}>Add Doctor</Link>
            </li>
            <li>
              <Link to={"/dashboard/manage-doctors"}>Manage Doctors</Link>
            </li>
          </>
        ) : undefined}
      </ul>
    </div>
  );
};
export default DashboardMenu;
