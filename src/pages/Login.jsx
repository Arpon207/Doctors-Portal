import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../components/shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "./../Firebase/firebase.init";
import { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";
import ResetPasswordModal from "../components/ResetPassword/ResetPasswordModal";
import ResetPassword from "./../components/ResetPassword/ResetPassword";
import logo from "../assets/icons/check-mark.png";
import useToken from "./../hooks/useToken";

const Login = () => {
  const [isShow, setIsShow] = useState(false);
  const [firebaseError, setFirebaseError] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [showModal, setShowModal] = useState(false);

  const [token] = useToken(user);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    if (data) {
      signInWithEmailAndPassword(data.email, data.password);
    }
  };

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token]);

  useEffect(() => {
    switch (error?.code) {
      case "auth/user-not-found":
        setFirebaseError("User not found");
        break;
      case "auth/wrong-password":
        setFirebaseError("Wrong password");
        break;
      default:
        setFirebaseError("");
        break;
    }
  }, [error]);

  useEffect(() => {
    if (showModal === true) {
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
    }
  }, [showModal]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grid place-items-center min-h-screen">
      <div
        className={`absolute left-0 right-0 m-auto w-fit bg-color1 z-30 py-3 px-7 rounded transition-all delay-300 ${
          showModal ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <img src={logo} alt="" width={60} />
        <h1 className="text-md text-center">SENT</h1>
      </div>
      <div className="card w-96 bg-base-100 lg:shadow-xl p-10">
        <h1 className="text-center text-2xl mb-5">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /[a-z0-9]+@gmail.com/,
                  message: "Please enter a valid email",
                },
              })}
              className="input input-bordered w-full"
            />
            {errors?.email ? (
              <label className="label">
                <span className="label-text-alt text-red">
                  {errors?.email?.message}
                </span>
              </label>
            ) : undefined}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message:
                    "Password should contain minimum 8 characters, at least 1 letter and 1 number",
                },
              })}
              className="input input-bordered w-full"
            />
            {errors?.password ? (
              <label className=" label">
                <span className="label-text-alt text-red">
                  {errors?.password?.message}
                </span>
              </label>
            ) : undefined}
            <ResetPassword setIsShow={setIsShow} />
          </div>
          {firebaseError ? (
            <p className="text-sm text-red text-center pb-3">{firebaseError}</p>
          ) : undefined}
          <button className="btn w-full">Login</button>
        </form>
        <p className="text-sm text-center mt-3">
          New to Doctors Portal?{" "}
          <Link
            to={"/signup"}
            className="link link-hover text-color1"
            state={from}
          >
            Create new account
          </Link>
        </p>
        <div className="divider">OR</div>
        <SocialLogin from={from} />
      </div>
      {isShow ? (
        <ResetPasswordModal setIsShow={setIsShow} setShowModal={setShowModal} />
      ) : undefined}
    </div>
  );
};

export default Login;
