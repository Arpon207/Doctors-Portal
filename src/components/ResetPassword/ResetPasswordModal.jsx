import { FiInfo } from "react-icons/fi";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { auth } from "./../../Firebase/firebase.init";
import { toast } from "react-toastify";

const ResetPasswordModal = ({ setIsShow, setShowModal }) => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const success = await sendPasswordResetEmail(email);
    if (success) {
      setIsShow(false);
      setShowModal(true);
    }
  };

  let firebaseError;
  if (error?.code === "auth/user-not-found") {
    firebaseError = "User not found";
  }

  return (
    <div>
      <input type="checkbox" id="reset-pass-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="reset-pass-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Reset Password</h3>
          <p className="text-sm mt-2">
            <FiInfo className="inline" /> Enter your account's verified email
            address.
          </p>
          <p className="text-sm mt-2">
            <FiInfo className="inline" /> An e-mail Will be sent with the URL
            for re-issuing your password.
          </p>
          <form onSubmit={onSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full mt-5 "
            />
            {firebaseError ? (
              <p className="text-sm text-red text-center my-3">
                {firebaseError}
              </p>
            ) : undefined}
            <input type="submit" className="btn w-full mt-5" value={"SUBMIT"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordModal;
