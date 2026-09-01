"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = () => {
    setEmailError("");

    const emailFormat = email.includes("@");
    if (!emailFormat) {
      return setEmailError("Invalid email format");
    }
    redirect("/resetPassword");
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateEmail();
  };
  return (
    <div className="min-h-screen sm:w-[60%] mx-auto flex items-center justify-center flex-col px-4">
      <h1 className="flex flex-col items-center text-xl font-bold tracking-tight">
        Reset Password
      </h1>
      <form action="" onSubmit={handleSubmit}>
        {emailError && (
          <p className="w-full text-center  text-sm text-red-500 ">
            {emailError}
          </p>
        )}
        <label htmlFor="password" className="text-sm font-medium">
          Email
        </label>
        <input
          id="password"
          onChange={(e) => setEmail(e.target.value)}
          className="input bg-transparent w-full rounded-md border border-gray-300 mt-1 mb-3 focus-visible:ring-1 focus-visible:ring-(--primary-red) focus-visible:bg-white "
        />

        <button
          type="submit"
          className="btn w-full bg-(--primary-red) hover:bg-(--primary-red)/90 border-none shadow-none rounded-md text-sm font-medium mb-3"
        >
          Send Reset Link
        </button>
      </form>
      <Link href="/signin" className="text-(--primary-red) text-sm font-medium">
        Back to login
      </Link>
    </div>
  );
}
