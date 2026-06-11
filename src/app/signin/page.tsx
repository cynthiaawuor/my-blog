import { Flame } from "lucide-react";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="min-h-screen sm:w-[60%] mx-auto flex items-center justify-center flex-col px-4">
      <div className="flex flex-col gap-3 items-center text-xl font-bold">
        <Flame className="text-(--primary-red)" size={32} />
        <h1>
          <span className="text-(--primary-red)">My</span>Blog
        </h1>
      </div>
      <p className="font-medium text-sm text-gray-500">Sign in to continue</p>
      <form action="">
        <label htmlFor="email" className="text-sm font-medium ">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="input bg-transparent w-full rounded-md border border-gray-300 mt-1 mb-3 focus-visible:ring-1 focus-visible:ring-(--primary-red) "
        />

        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="input bg-transparent w-full rounded-md border border-gray-300 mt-1 mb-3 focus-visible:ring-1 focus-visible:ring-(--primary-red) "
        />
        <button
          type="submit"
          className="btn w-full bg-(--primary-red) hover:bg-(--primary-red)/90 border-none shadow-none rounded-md text-sm font-medium mb-3"
        >
          Sign In
        </button>
        <button className="btn w-full bg-transparent hover:bg-(--primary-red)/90 transition-colors duration-300 border-gray-300 shadow-none rounded-md text-sm font-medium text-gray-700 mb-8">
          Continue with Google
        </button>
      </form>
      <div className="text-sm">
        <Link
          href="/forgotPassword"
          className="text-gray-500 hover:text-(--primary-red) font-medium"
        >
          Forgot password?
        </Link>
        <p className="text-gray-500">
          Don't have an account?{" "}
          <Link href="/signup" className="text-(--primary-red) font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
