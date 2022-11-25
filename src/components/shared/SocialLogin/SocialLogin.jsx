import { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./../../../Firebase/firebase.init";
const SocialLogin = ({ from }) => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);
  return (
    <div>
      <button
        className="btn btn-outline w-full"
        onClick={() => signInWithGoogle()}
      >
        CONTINUE WITH GOOGLE
      </button>
    </div>
  );
};

export default SocialLogin;
