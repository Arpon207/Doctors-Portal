import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../Firebase/firebase.init";
import Loading from "./../components/Loading/Loading";
import { useLocation, Navigate } from "react-router-dom";
import useAdmin from "./../hooks/useAdmin";
import { signOut } from "firebase/auth";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const { data, isLoading } = useAdmin(user);
  if (loading || isLoading) {
    return <Loading />;
  }

  if (!user || !data?.admin) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAdmin;
