import ResetPasswordModal from "./ResetPasswordModal";
import { useState } from "react";

export default function ResetPassword({ setIsShow }) {
  return (
    <>
      <label
        htmlFor="reset-pass-modal"
        className="link link-hover text-sm my-2"
        onClick={() => setIsShow(true)}
      >
        Forget Password ?
      </label>
    </>
  );
}
