import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../Firebase/firebase.init";
import useAdmin from "./../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const { data } = useAdmin(user);
  return (
    <div>
      <div className="drawer drawer-mobile pt-20">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col bg-[#ECEEF2] pt-10 px-5 lg:pt-20 lg:px-20">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
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
      </div>
    </div>
  );
};

export default Dashboard;
