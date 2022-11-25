import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./../components/shared/SocialLogin/SocialLogin";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "./../Firebase/firebase.init";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import Loading from "../components/Loading/Loading";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile] = useUpdateProfile(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state;

  const onSubmit = async (data) => {
    if (data) {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name });
    }
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  let firebaseError;
  if (error?.code === "auth/email-already-in-use") {
    firebaseError = "Email already used for another account";
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grid place-items-center min-h-screen">
      <div className="card w-96 bg-base-100 lg:shadow-md p-10">
        <h1 className="text-center text-2xl mb-5">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 4,
                  message: "Name is too short",
                },
              })}
              className="input input-bordered w-full"
            />
            {errors?.name ? (
              <label className="label">
                <span className="label-text-alt text-red">
                  {errors?.name?.message}
                </span>
              </label>
            ) : undefined}
          </div>
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
          </div>
          {firebaseError ? (
            <p className="text-sm text-red text-center pb-3">{firebaseError}</p>
          ) : undefined}
          <button className="btn w-full mt-5">Sign Up</button>
        </form>
        <p className="text-sm text-center mt-3">
          Have an account?{" "}
          <Link to={"/login"} className="link link-hover text-color1">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <SocialLogin from={from} />
      </div>
    </div>
  );
};

export default Signup;
